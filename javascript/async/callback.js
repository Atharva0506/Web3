function sum(x,y){
    return x+y
}

function sub(x,y){
    return x-y
}

function mul(x,y){
    return x*y
}

function div(x,y){
    return x/y
}

function doAll(x=0,y=0,op=sum){
    return op(x,y)
}

console.log(doAll(15,41,mul))