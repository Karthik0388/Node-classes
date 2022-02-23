const fs = require("fs/promises");

//? promises way of creating a folder and file
// fs.mkdir("src1").then(_ => {
//     console.log("src folder created.....");
//     fs.writeFile('./src1/app.js', "Data").then(
//         console.log("app.js file created inside src")
//     ).catch(err=>console.log(err))
// }).catch(err => console.log(err))

//? promises way of deleting a folder and file
// fs.unlink("./src1/app.js").then(
//     console.log("deleted app.js"),
//     fs.rmdir('./src1').then(
//         console.log("deleted src folder")
//     )
// ).catch(err=>console.log(err))

//? promises way of reading file
// fs.readFile("./readme.txt", "utf-8").then(chunk => {
//     console.log(chunk);
// }).catch(err => {
//     console.log(err);
// })

//? Async and await => way of reading a file
// let ReadDataByUsingAW = async () => {
//     try {
//         let data = await fs.readFile('./readme.txt', 'utf-8');
//         console.log(data);
//     } catch (error) {
//         console.log(error);
//     }
// };

// ReadDataByUsingAW();

// ?reading file Using IIFE
// (async () => {
//     try {
//         let data = await fs.readFile('./readme.txt', 'utf-8');
//         console.log(data);
//     } catch (error) {
//         console.log(error);
//     }
// })()

// ?rename a file using IIFE
// (async () => {
//      try {
//         let data = await fs.rename('./readme1.txt', 'readme.txt');
//         console.log(data);
//     } catch (error) {
//         console.log(error);
//     }
// })()

// ?rename a file using promise
// fs.rename("./readme1.txt", "readme.txt").then(chunk => {
//     console.log(chunk);
// }).catch(err => {
//     console.log(err);
// })

// ?AppendFile using promises
//  fs.appendFile("./readme.txt", " Priyanka waiting for....?").then(_ => {
//     console.log("appended data in readme.txt");
// }).catch(err => {
//     console.log(err);
// })