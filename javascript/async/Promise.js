const fs = require("fs");

// function setTimeoutPromisified(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms))
// }

// function callback(x=5000) {
//     console.log(`${x} seconds have passed!`)
// }
// let ms = 5000
// setTimeoutPromisified(ms).then(callback)

// promise is supposed to return something

// function random(res){
//     setTimeout(res,3000)
// }
// let p =new Promise(random)

// function callback(){
//     console.log("Hello there!!!")
// }
// console.log(p)

// p.then(callback)

// function dataClean(resolve){
//     fs.readFile('a.txt','utf-8',(err,data)=>{
//         resolve(data)
//     })
// }

// function cleanFile(){
//     return new Promise(dataClean)
// }

// const p = cleanFile()

// p.then((x)=>{console.log(x)})

class MyPromise {
  constructor(fn) {
    this.resolve = () => {};
    const afterTaskIsDone = ()=> {
      this.resolve();
    }
    fn(afterTaskIsDone);
  }
  then(callback) {
    this.resolve = callback;
  }
}

function asyncTask() {
  return new MyPromise((resolve) => {
    setTimeout(() => {
      console.log("set timeout done");
      resolve();
    }, 3000);
  });
}

const myP = asyncTask();

myP.then(() => {
  console.log("task completed");
});
