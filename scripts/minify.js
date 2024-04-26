const fs = require('fs');
const path = require('path');
const uglify = require('uglify-js');

const DIST_FOLDER = path.resolve(process.cwd(), 'lib');

const options = {
  nameCache: {},
  output: {
    comments: 'some'
  },
  mangle: true,
  compress: {
    sequences: true,
    dead_code: true,
    conditionals: true,
    booleans: true,
    unused: true,
    if_return: true,
    join_vars: true,
    drop_console: true,
    typeofs: false
  }
};

const minify = (file, dest) => {
  const code = fs.readFileSync(file, 'utf8');
  const minified = uglify.minify(code, options);

  if (minified.error) {
    console.error(minified.error);
    return false;
  }

  if (minified.warnings) {
    console.warn(minified.warnings);
  }

  const destination = dest || file;

  fs.writeFileSync(destination, minified.code, 'utf8');
  console.log(`Minified ${file} to ${destination}`);

  return true;
};

console.log('Minifying files ...\n');

const minifyFolder = (folder) => {
  fs.readdirSync(folder).forEach((file) => {
    const filePath = path.resolve(folder, file);
    if (fs.lstatSync(filePath).isDirectory()) {
      minifyFolder(filePath);
    } else if (file.endsWith('.js') && !file.endsWith('.min.js')) {
      minify(filePath);
    }
  });
};

minifyFolder(DIST_FOLDER);
