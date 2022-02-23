const fs = require("fs");

//? Creating a buffer
// let buffer = Buffer.from("Karthik");
// console.log(buffer.toString());

// //? Creating a readable stream
// let readableStream = fs.createReadStream("./write.txt", "utf-8");
// //? add event to stream
// readableStream.on('data', chunk => {
//     console.log(chunk)
// });

// ?Writing and reading a stream using callback

// let readableStream = fs.createReadStream('./write.txt', 'utf-8');
// let writeStream = fs.createWriteStream('./Karthik.txt');
// readableStream.on('data', chunk => {
//     console.log("successfully red chunk....");
//     //write stream
//     writeStream.write(chunk, err => {
//         if (err) throw err;
//         console.log("successfully written...");
//         console.log(chunk.toString());
//     })
// })

//? Another way of reading and writing a streams

let readableStream = fs.createReadStream('./Karthik.txt', 'utf-8');
let writeStream = fs.createWriteStream('./Gukul.txt');

readableStream.pipe(writeStream);
