const fs = require("fs").promises;

//  Functional arguments

// function sum(x, y) {
//   return x + y;
// }

// function sub(x, y) {
//   return x - y;
// }

// function mul(x, y) {
//   return x * y;
// }

// function div(x, y) {
//   return x / y;
// }

// function doAll(x = 0, y = 0, op = sum) {
//   return op(x, y);
// }

// console.log(doAll(15, 41, mul));

// async function readData(fileName) {
//   try {
//     const data = await fs.readFile(fileName, "utf-8");
//     return data;
//   } catch (err) {
//     return err;
//   }
// }

// readData("a.txt").then((data) => {
//   console.log(data);
// });


// Call Back Hell

setTimeout(()=>{
    console.log("hi")
    setTimeout(()=>{
        console.log("Hello There")
        setTimeout(()=>{   
            console.log("hi there")
        },4000)
    },3000)
},1000)