// 1. Write a node.js program for making external http calls.
var http = require("http");
http
  .request(
    {
      host: "www.google.com",
      method: "GET",
      path: "/",
    },
    function (response) {
      response.setEncoding("utf8");
      response.on("readable", function () {
        console.log(response.read());
      });
    }
  )
    .end();
//   2. Write a program in node.js to parse the given url.
//http://www.testyantra.com/index.php/nodejs/node-js-filesystem

console.log(
  url.parse("http://www.testyantra.com/index.php/nodejs/node-js-filesystem")
);

// 3. There is a given object, write node.js program to print the given object's properties, delete the second property and get length of the object.
var user = {
first_name: "John",
last_name: "Smith",
age: "38",
department: "Software"
};

var user = {
  first_name: "John",
  last_name: "Smith",
  age: "38",
  department: "Software",
};
console.log(user);
console.log(Object.keys(user).length);
delete user.last_name;
console.log(user);
console.log(Object.keys(user).length);

// 4. How do you iterate over the given array in node.js?
// ['fish', 'crab', 'dolphin', 'whale', 'starfish']

const arr = ["fish", "crab", "dolphin", "whale", "starfish"];
arr.forEach(element => {
  console.log(element);
});