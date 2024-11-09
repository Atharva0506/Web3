
function greet(name:string){
    console.log(`hello ${name}`);
}

greet("Luffy")

function sum(a:number,b:number) : number{
    return a+b
}


console.log(sum(35,34))


function isLegal(a:number):boolean{
    if(a>18){
        return true
    }
    else{
        return false
    }
}

console.log(isLegal(19))

function delayCall(fn: ()=>void,t:number){
    setTimeout(fn,t)
}

console.log(delayCall(()=>{
    console.log("Delayed call")
},2000))