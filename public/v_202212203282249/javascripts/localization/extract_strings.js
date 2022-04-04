'use strict';
const fs = require('fs');
const glob = require('globby');
const mkdirp = require('mkdirp');
const stripbom = require('strip-bom');

// temporary input and output config
const INPUT_DIR = 'input';
const INPUT_MESSAGES_GLOB = `${INPUT_DIR}/public_*_strings.json`;
const INPUT_MESSAGE_FILE_REGEX = /public_([^_]{5}).*_strings\.json/;
const OUTPUT_DIR = 'locales';
const OUTPUT_FILE_TEMPLATE = `${OUTPUT_DIR}/public_desktop_modal_[locale]_strings.json`;

// JS and HTML files for modals
const JS_LIB_PATH = '../../javascripts';
const JS_FILES = [
  'revizit_unification.js',
  'modals/public_modal_common.js'
].map(fileName => `${JS_LIB_PATH}/${fileName}`);
const HTML_TEMPL_PATH = '../../../desktop';
const TEMPL_FILES = [
  'forgot_unification.html.templ',
  'login_unification.html.templ',
  'signup_unification.html.templ'
].map(fileName => `${HTML_TEMPL_PATH}/${fileName}`);

// Regex to extract string IDs
const TRANSLATE_ATTRIBUTE_REGEX_STR = 'data-translate[-\\w]*?="([A-Z_0-9]+?)"';
const TRANSLATE_FN_CALL_REGEX_STR = 'translate\\("([A-Z_0-9]+?)"\\)';

const extractStringIds = (fileName, regExp) => {
  const contents = fs.readFileSync(fileName, 'utf-8');
  // in JS, you can't run a regex globally and also do captures outside of a loop, so it's a two-step process:
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match
  const matches = contents.match(new RegExp(regExp, 'g'));
  // matches is an array of strings like:
  // 'data-translate="FORGOT_PASSWORD_MODAL_SEND_EMAIL_BUTTON_LABEL"'
  // or 'translate("FORGOT_PASSWORD_MODAL_SEND_EMAIL_BUTTON_LABEL")''
  return matches.map((matchString) => {
    // capture the string
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec
    const result = new RegExp(regExp).exec(matchString);
    return result[1];
  });
}

// extract required strings from relevant HTML template files
const templFileStrings = TEMPL_FILES.map((fileName) => extractStringIds(fileName, TRANSLATE_ATTRIBUTE_REGEX_STR));
// flatten an array of arrays with reduce and concat
const flattenedTemplFileStrings = templFileStrings.reduce((a, b) => a.concat(b), []);
// extract required strings from relevant JS files
const jsLibStrings = JS_FILES.map((fileName) => extractStringIds(fileName, TRANSLATE_FN_CALL_REGEX_STR));
// flatten an array of arrays with reduce and concat
const flattenedJSLibStrings = jsLibStrings.reduce((a, b) => a.concat(b), []);
// concat and sort strings
const usedStringIds = flattenedJSLibStrings.concat(flattenedTemplFileStrings).sort();

const inputFiles = glob.sync(INPUT_MESSAGES_GLOB);
if (inputFiles.length === 0) {
  console.warn('No input files found. See README for details.');
  return;
}

// read in the input strings and put them into an object where the key is the desired output filename
const messageObjects = inputFiles.reduce((output, fileName) => {
  const fileContents = stripbom(fs.readFileSync(fileName, 'utf-8'));
  const stringsObject = JSON.parse(fileContents);
  const locale = fileName.match(INPUT_MESSAGE_FILE_REGEX)[1];
  // Need to ensure the locale codes match those offered by globalize
  // See workgroup/wgapp/public/v_base/javascripts/localization/node_modules/cldr-data/main for available languages
  const tableauLocaleToGlobalizeLocaleMap = new Map([
      ['de-de', 'de'],
      ['en-gb', 'en-GB'],
      ['en-us', 'en'],
      ['es-es', 'es'],
      ['fr-fr', 'fr'],
      ['it-it', 'it'],
      ['ja-jp', 'ja'],
      ['ko-kr', 'ko'],
      ['pt-br', 'pt'],
      ['zh-cn', 'zh-Hans'],
      ['zh-tw', 'zh-Hant'],
  ]);
  const outputFileName = OUTPUT_FILE_TEMPLATE.replace('[locale]', tableauLocaleToGlobalizeLocaleMap.get(locale.toLowerCase()));
  output[outputFileName] = stringsObject;
  return output;
}, {});

// make sure the directory exists in which to dump the output
mkdirp.sync(OUTPUT_DIR);

const outputtedStringIds = [];
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#The_replacer_parameter
// this fn is called once with a blank stringId representing the full object itself, just return the object
// then this fn is called for each property in the object
const includeInOutputIfUsed = (stringId, stringValue) => {
  if (!stringId) {
    return stringValue;
  }
  const stringIdUsed = usedStringIds.includes(stringId);
  if (stringIdUsed && !outputtedStringIds.includes(stringId)) {
    outputtedStringIds.push(stringId);
  }
  return stringIdUsed ? stringValue : undefined;
}

Object.keys(messageObjects).forEach((fileName) => {
  const fileContents = messageObjects[fileName];
  fs.writeFileSync(fileName, JSON.stringify(fileContents, includeInOutputIfUsed, 2), 'utf-8');
});

// Audit remaining used strings and make sure that all have been accounted for
const usedStringsNotOutputted = usedStringIds.filter((usedStringId) => {
  return !outputtedStringIds.includes(usedStringId);
});
if (usedStringsNotOutputted.length > 0) {
  console.warn('Not all strings used in the modals were found in the input!');
  console.warn(usedStringsNotOutputted);
} else {
  console.log(`Modal JSON files created successfully to directory: ${OUTPUT_DIR}/`);
}
