const fs = require('fs');
const path = require('path');
const archiver = require('archiver');

function zipDirectory(sourceDir, outPath) {
  const archive = archiver('zip', { zlib: { level: 9 }});
  const stream = fs.createWriteStream(outPath);

  return new Promise((resolve, reject) => {
    archive
      .directory(sourceDir, false)
      .on('error', err => reject(err))
      .pipe(stream);

    stream.on('close', () => resolve());
    archive.finalize();
  });
}

const sourceDir = '.';
const outPath = path.join(__dirname, 'project-files.zip');

zipDirectory(sourceDir, outPath)
  .then(() => console.log('Project files zipped successfully!'))
  .catch(err => console.error('An error occurred:', err));