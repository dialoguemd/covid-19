const fs = require('fs');
const path = require('path');
const glob = require('glob');
const md5File = require('md5-file');

const REGIONS_SRC = 'src/regions/';

const saveJsonFile = (dst, data) => {
  console.log(`Saved ${dst}`)
  fs.writeFileSync(dst, JSON.stringify(data, null, 2));
}

const cleanLeadingSlash = str => str.substr(str.charAt(0) === "/" ? 1 : 0)

const getLanguageFromFileName = (file, languages) => {
  const parts = file.split('.')
  const lang = parts.pop() && parts.pop()
  return languages.indexOf(lang) !== -1 ? lang : languages[0]
}

const getClassFromFile = file => path.basename(path.dirname(file))

const generateManifest = (regionPath) => {

  const SRC_INFO = path.join(regionPath, '/info/')
  const DST_MANIFEST = path.join(regionPath, '/manifest.json')
  const config = require(path.join('../', regionPath, '/config.json'));


  const getFileInfo = file => {
    const stats = fs.statSync(file)
    return {
      name: path.basename(file, '.md'),
      path: cleanLeadingSlash(file.replace(SRC_INFO, '')),
      md5: md5File.sync(file),
      modified: stats.mtime,
      created: stats.ctime,
      class: getClassFromFile(file),
      lang: getLanguageFromFileName(file, config.SUPPORTED_LANGUAGES)
    }
  }

  glob(`${SRC_INFO}/**/*.md`, function (err, files) {

    const output =
      files
        .map(getFileInfo)
        .filter(file => !!file.class)

    saveJsonFile(DST_MANIFEST, output)

  })

}

// Iterate through region folders and generate manifests
glob(`${REGIONS_SRC}/*/`, function (err, regionsPaths) {
  regionsPaths.forEach(regionPath => {
    generateManifest(regionPath)
  })
})

