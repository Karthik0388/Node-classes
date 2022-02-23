//? commonJs way of importing
// let { javaFullstack, pythonFullstack, mernStack, Testing } = require('./Courses');

// let MERN = mernStack("html", "css", "js", "Reactjs", "nodejs", "expressjs", "mongodb");

// MERN.forEach(x => {
//     console.log(x);
// })

// ?Es6 module way of importing
// import { javaFullstack, pythonFullstack, mernStack, Testing } from "./Courses.js";

// console.log(javaFullstack("java","spring"));
// console.log(pythonFullstack("python","flask"));

// ?combine and importing both name and default
// import FullStack, {
//   Java as Dixith,
//   JavaScript as Priyanka,
//   Python as Shashi,
// } from "./Courses.js";

// console.log(FullStack("html", "Css", "js"));
// console.log(Dixith("java", "Spring"));
// console.log(Priyanka("html", "css"));

// import * as JSP from "./Courses.js";

// console.log(JSP.Java("Java"));
// console.log(JSP.JavaScript("JavaScript"));
// console.log(JSP.Python("Python"));
// console.log(JSP.default("js","nodejs"));