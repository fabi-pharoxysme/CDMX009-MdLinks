const file = require('fs');
//get file 
function getFile () {
 let indexFile = process.argv.indexOf("--file");
 let url = process.argv[indexFile+1];
//  console.log(url);
 readFile(url);
 return console.log(url);
}
module.exports.modGetFile = getFile;
getFile();
console.log(getFile)
// Read file 
function readFile (url) {
  const read = file.readFileSync( url, 'utf-8')
  console.log(read)
  return read;
}
module.exports.modReadFile = readFile;
// Validate as markdown file 