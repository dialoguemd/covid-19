const fs = require('fs');
const path = require('path');
const glob = require('glob');
const md5File = require('md5-file');

const packageJson = require('../package.json');

const SRC = packageJson.contentSrc
const DST = packageJson.contentManifestDst
const SUPPORTED_LANGUAGES = packageJson.supportedLanguages
const DEFAULT_LANGAUGE = SUPPORTED_LANGUAGES[0]

const cleanLeadingSlash = str => str.substr(str.charAt(0) === "/" ? 1 : 0)

const saveJsonFile = (dst, data) => {
  console.log(`Saved ${dst}`, data)
  fs.writeFileSync(dst, JSON.stringify(data, null, 2));
}

const getLanguageFromFileName = file => {
  try {
    const parts = file.split('.')
    const lang = parts[parts.length - 2]
    return SUPPORTED_LANGUAGES.indexOf(lang) !== -1 ? lang : DEFAULT_LANGAUGE
  } catch (err) {}
}

const getFileInfo = file => {
  const stats = fs.statSync(file)
  return {
    name: path.basename(file, '.md'),
    path: cleanLeadingSlash(file.replace(SRC, '')),
    md5: md5File.sync(file),
    modified: stats.mtime,
    created: stats.ctime,
    class: getClassFromFile(file),
    lang: getLanguageFromFileName(file)
  }
}

const getClassFromFile = file => cleanLeadingSlash(path.dirname(file).replace(SRC, ''))

glob(`${SRC}/**/*.md`, function (err, files) {

  const output =
    files
      .map(getFileInfo)
      .filter(file => !!file.class)
      .reduce((fileSet, info) => [...fileSet, info ], [])

  saveJsonFile(DST, output)

})
