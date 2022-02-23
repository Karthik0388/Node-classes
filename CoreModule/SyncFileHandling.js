let fs = require("fs");

// !Synchrounous way of file handling

// ?fs.readmeFileSync -> to reading the file
// let readmeSync = fs.readFileSync("./readme.txt", { encoding: "utf-8" });
// let readmeSync = fs.readFileSync("./readme.txt",  "utf-8" ); //?directly pass second argument
// console.log(readmeSync);

// ?fs.writeFileSync -> to creating a file
// Writing and reading a file
// let writeMeText = fs.writeFileSync("./writeMe.txt", "My Name is Karthik");
// let readmeSync = fs.readFileSync("./writeMe.txt", { encoding: "utf-8" });
// console.log(writeMeText);
// console.log(readmeSync)


// ?fs.mkdirSync creating a directory or creating a folder
// fs.mkdirSync("Jspiders");
// fs.writeFileSync('./Jspiders/Frontend.js', "html,css,js");
// fs.writeFileSync('./Jspiders/Backend.js', 'nodejs, expressjs');

// let frontEndTech =fs.readFileSync('./Jspiders/Frontend.js', 'utf-8');
// console.log(frontEndTech)

//?fs.unlinkSync -> deleting a file
// fs.unlinkSync('./writeMe.txt');
// fs.unlinkSync('./Jspiders/Frontend.js');
// fs.unlinkSync('./Jspiders/Backend.js');

// ?fs.remdirSync -> deleting a folder
// fs.rmdirSync('./Jspiders')

