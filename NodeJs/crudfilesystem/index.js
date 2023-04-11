const fs = require('fs');
const path = require('path');
const direPath = path.join(__dirname,'crud');
const filePath = `${direPath}/apple.txt`;


// fs.writeFileSync(filePath,'This is simple text file');

// fs.readFile(filePath, 'utf8', (err, item)=> {
//     console.log(item)
// })

// fs.appendFile(filePath, " the file apple.txt", (err)=> {
//     if(!err) console.log("file is updated");
// });

// fs.rename(filePath, `${direPath}/fruit.txt`, (err)=> {
//     if(!err) console.log("File name is updated")
// })

fs.unlinkSync(`${direPath}/fruit.txt`)