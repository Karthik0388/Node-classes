let fs = require('fs');

fs.mkdir("src", err => {
    if (err) throw err;
    console.log("src folder created...");
    fs.writeFile("./src/index.js", "index Data", err => {
        if (err) throw err;
        console.log("index.js file is created....")
    });
     fs.writeFile("./src/app.js", "App Data", err => {
       if (err) throw err;
       console.log("app.js file is created....");
     });
    fs.mkdir("./src/components",err => {
        if (err) throw err;
        console.log("components folder created...")
        fs.mkdir("./src/components/Navbar")
    })
})