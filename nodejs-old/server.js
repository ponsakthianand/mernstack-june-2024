// const fs = require('node:fs')
// const path = require('node:path');

// fs.readFile(path.join(__dirname, 'etc', 'newFile.txt'), (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

// // Create ./tmp/a/apple, regardless of whether ./tmp and ./tmp/a exist.
// fs.mkdir(path.join(__dirname, 'etc', 'orange'), { recursive: true }, (err) => {
//   if (err) throw err;
// });

// fs.rename(path.join(__dirname, 'etc', 'orange'), path.join(__dirname, 'etc', 'strawberry'), (err) => {
//   if (err) throw err;
//   console.log('Rename complete!');
// });


// const { readFile, rename } = require('node:fs/promises');
// const { resolve } = require('node:path');


// const asyncTest = async () => {

//   try {
//     const filePath = resolve('./etc/newFile.txt');
//     const contents = await readFile(filePath, { encoding: 'utf8' });
//     const renameFile = await rename(filePath, './etc/new-File.txt');
//     const renameS = rename('./etc/new-File.txt', './etc/bigFile.txt');
//     console.log(contents, renameFile, renameS);
//   } catch (err) {
//     console.error(err.message);
//   }

// }

// asyncTest()

console.log('hi how are you!')