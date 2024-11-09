function greet(name: string) {
  console.log(`hello ${name}`);
}

greet("Luffy");

function sum(a: number, b: number): number {
  return a + b;
}

console.log(sum(35, 34));

function isLegal(a: number): boolean {
  if (a > 18) {
    return true;
  } else {
    return false;
  }
}

console.log(isLegal(19));

function delayCall(fn: () => void, t: number) {
  setTimeout(fn, t);
}
delayCall(() => {
  console.log("Delayed call");
}, 2000);

interface User {
  firstname: string;
  lastname: string;
  email: string;
  age: number;
}


function isLegal2(user:User){
    return (user.age > 18 ? true : false)
}

console.log(isLegal2({
    firstname:"Lufyy",
    lastname:"D",
    email:"luffy@onepiece.com",
    age:20
}))
