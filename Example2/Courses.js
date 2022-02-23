// export let javaFullstack = (...rest) => rest;

// export let pythonFullstack = (...rest) => rest;

// export let mernStack = (...rest) => rest;

// export let Testing = (...rest) => rest;

// ? Commonjs Way of exporting
// 1st Way Of exporting
// module.exports.javaFullstack = javaFullstack;
// module.exports.pythonFullstack = pythonFullstack;
// module.exports.mernStack = mernStack;
// module.exports.Testing = Testing;

// 2nd Way of exporting
// module.exports = {
//     javaFullstack,
//     pythonFullstack,
//     mernStack,
//     Testing,
// }

// ?Es6 way of exporting
let Java = (...rest) => rest;

let JavaScript = (...rest) => rest;

let Python = (...rest) => rest;

let Stack = (...rest) => rest;

export { Java, JavaScript, Python };
export default Stack;
