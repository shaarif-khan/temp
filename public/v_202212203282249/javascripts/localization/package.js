'use strict';
let fs = require('fs');
let glob = require('globby');

const GLOBALIZE_DIST_DIR = 'node_modules/globalize/dist';

const packageConf = {
    files: [
      `${GLOBALIZE_DIST_DIR}/globalize-runtime.js`,
      `${GLOBALIZE_DIST_DIR}/globalize-runtime/plural.js`,
      `${GLOBALIZE_DIST_DIR}/globalize-runtime/message.js`,
      `*.compiled.js`,
      `localization_helpers.js`
    ],
    out: '../localization.js'
};

(function packageFiles() {
  let files = glob.sync(packageConf.files);

  let outputFileContentsArray = files.map((file) => {
    return fs.readFileSync(file);
  });

  let outputFileContents = outputFileContentsArray.join('\n');
  
  fs.writeFileSync(packageConf.out, outputFileContents);
})();
