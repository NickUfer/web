var copydir = require('copy-dir');
var fs = require('fs');
var fse = require('fs-extra');

;[
  './public/css',
  './public/docs',
  './public/en',
  './public/images',
  './public/img',
  './public/js',
  './public/versions',
  // './public/docs/deprecated',
].forEach(function (d) {
  try {
    fs.mkdirSync(d, { recursive: true })
  } catch (e) {
    console.log('Got error while creating dir', d, e.message)
  }
})

copydir.sync('./_archive/ory-am-master/images', './public/images/')

copydir.sync('./docs/css', './public/css')
copydir.sync('./docs/docs', './public/docs')
copydir.sync('./docs/en', './public/en')
copydir.sync('./docs/images', './public/images')
copydir.sync('./docs/img', './public/img')
copydir.sync('./docs/js', './public/js')
copydir.sync('./docs/versions', './public/versions')

fse.copySync('./docs/sitemap.xml', './public/docs/sitemap.xml')
fse.copySync('./docs/versions.html', './public/docs/versions.html')

// copydir.sync('./deprecated/guides', './public/docs/deprecated')
