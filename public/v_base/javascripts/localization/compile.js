'use strict';
let compile = require('globalize-config-compiler');
let fs = require('fs');
let glob = require('globby');

const localeConf = {
    languageTagRegex: /locales\/public_desktop_modal_([a-zA-Z-]{2,})_strings.json/,
    messagesGlob: `locales/public_desktop_modal_*_strings.json`,
    messages: `locales/public_desktop_modal_[locale]_strings.json`
};

(function compileLocales() {
  let messageFiles = glob.sync(localeConf.messagesGlob);

  let languageTags =  messageFiles.map((fileName) => {
    let matches = fileName.match(localeConf.languageTagRegex);
    let locale = matches[1];
    return locale;
  });

  let conf = Object.assign(localeConf, {
    availableLocales: languageTags
  });

  let compiled = compile(conf);
  for (let locale in compiled) {
    fs.writeFile(`${locale}.compiled.js`,
      compiled[locale].replace(/return Globalize;/, `return new Globalize('${locale}');`),
      (error) => {
        if(error) {
          throw new Error('Something went wrong writing compiled globalize files');
        }
        console.log(`Compiled and wrote ${locale}.compiled.js`)
      });
  }

})();