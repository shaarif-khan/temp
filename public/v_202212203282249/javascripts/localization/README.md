#### Description
* Use this script to output the subset of strings used in the server modals.

#### Assumptions
* Directory structure looks something like: `<NEAR_WORKSPACE>\workgroup\wgapp\public\v_base\javascripts\localization`

#### Instructions
* In perforce, check out `<NEAR_WORKSPACE>\workgroup\wgapp\public\v_base\javascripts\localization.js` and the files in the `<NEAR_WORKSPACE>\workgroup\wgapp\public\v_base\javascripts\localization\locales` directory. These files will get updated.
* Create `input` directory inside the `localization` directory and put the 8 locale files from github named like: `public_*_strings.json`, where * is the locale tag (e.g. `en-US`)
* Inside `localization` directory, run `npm install` to install libraries needed to run this script
* Run `npm run extract` to dump new desktop modal JSON files into `locales` directory
* Double check the output is as expected (changes will show up in a p4 diff)
* Run `npm run compile` to build JS ready to ship

#### Extraction algorithm
* Import for all .templ HTML files and JS files
* Extract string IDs being used (look for `data-translate`, `data-translate-html` and `data-translate-placeholder` attribute values, as well as function calls to `translate`)
* Build a list of string IDs used
* For each language file:
	* ingest locale JSON file
	* for each key in the JSON file, if it is in the list of used string IDs, add to output object
	* output the used string ID output object into JSON

#### Author
* mbailey