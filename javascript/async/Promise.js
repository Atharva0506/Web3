// Promise
const fs= require('fs')

fs.readFile("a.txt","utf-8",(err,data)=>{
    if (data) {
        console.log(data)
    }
})