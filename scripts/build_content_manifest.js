const fs = require('fs');
const path = require('path');
const glob = require('glob');
const md5File = require('md5-file');

const packageJson = require('../package.json');

const SRC = packageJson.contentSrc
const DST = packageJson.contentManifestDst

const cleanLeadingSlash = str => str.substr(str.charAt(0) === "/" ? 1 : 0)

const saveJsonFile = (dst, data) => {
  fs.writeFileSync(dst, JSON.stringify(data, null, 2));
}

const getFileDetails = file => {
  const stats = fs.statSync(file)
  return {
    name: path.basename(file, '.md'),
    filePath: cleanLeadingSlash(file.replace(SRC, '')),
    md5: md5File.sync(file),
    modified: stats.mtime,
    created: stats.ctime,
  }
}

const getClassFromFile = file => cleanLeadingSlash(path.dirname(file).replace(SRC, ''))

glob(`${SRC}/**/*.md`, function (err, files) {

  const classMap =
    files
      .reduce((result, file) => {
        const className = getClassFromFile(file)
        const fileDetails = getFileDetails(file)
        if(!className) return result
        if(!result[className]) result[className] = []
        result[className].push(fileDetails)
        return result
      }, {})

  console.log(`Generated ${DST}`, classMap)

  saveJsonFile(DST, classMap)

})
