const fs = require('fs');
// import { readFile,writeFile } from 'fs';
// Asyncronously file handling

// Syntax
//? fs.readFile(path,encoding,callback)
// fs.readFile("./index.js", "utf-8", (err, data) => {
//     if (err) throw err;
//     console.log(data)
// });

// ?reading and writing a file
fs.readFile("./readme.txt", "utf-8", (err, data) => {
    if (err) throw err;
    console.log("SuccessFully Data red....");
  // ?Writing a data
    fs.writeFile("write.txt", data, (err) => {
        if (err) throw err;
        console.log("Successfully written data....");
        console.log(data);
    })
});

// ?Using Es6 Modules
// readFile("./mernStack.js", "utf-8", (err, data) => {
//     if (err) throw err;
//   // writeFile
//     writeFile("meanStack.js", data, (err) => {
//         if (err) throw err;
//         console.log("Successfully meanStack written");
//         console.log(data);
//     })
// });

// ?Deleting file
// ! syntax
// !fs.unlink(path,callback)
// fs.unlink("./mernStack.js", err => {
//     if (err) throw err;
//     console.log("successfullt Deleted the file");
// });

// ?creating a folder
// fs.mkdir("./mernStack", err => {
//     if (err) throw err;
//     console.log("folder created....")
// });