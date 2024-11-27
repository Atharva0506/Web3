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
  address?: {
    city: string;
    country: string;
    pincode: number;
  };
}

function isLegal2(user: User) {
  return user.age > 18 ? true : false;
}

console.log(
  isLegal2({
    firstname:"Monkey",
    lastname:"Luffy",
    email:"onepiece@gmail.com",
    age:30,

  })
);

type S = string | number;

function add(a: S, b: S) {
  return `${a}${b}`;
}

console.log(add(12, 23));
console.log(add("Monkey .D ", "Luffy"));

let x: string[] = ["Monkey", " .D ", "Luffy"];

console.log(x.join());

interface People {
  name: string;
  age: number;
  greet?: () => string;
}

let p: People = {
  name: "Luffy",
  age: 20,
  greet: () => {
    return "hello";
  },
};

console.log(p.greet?.());

class MyClass implements People {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}
const myClass = new MyClass("lufyy", 21);

console.log(myClass.age);

interface Admin {
  name: string;
  permission: string;
}

interface User2 {
  name: string;
  age: number;
}

type UserOrAdmin = User2 | Admin;

function greet2(user: UserOrAdmin) {
  console.log(user.name);
}

function get_max(arr: number[]): number {
  let maxValue: number = 0;
  arr.forEach((data) => {
    if (data > maxValue) {
      maxValue = data;
    }
  });
  return maxValue;
}

console.log(get_max([12, 11, 4, 22, 3, 44, 10, 10]));

interface User3 {
  firstname: string;
  lastname: string;
  age: number;
}

function getMaxAge(user: User3[]) {
  return user.filter((x) => x.age > 18);
}

console.log(
  getMaxAge([
    {
      firstname: "x",
      lastname: "y",
      age: 17,
    },
    {
      firstname: "a",
      lastname: "b",
      age: 19,
    },
    {
      firstname: "q",
      lastname: "w",
      age: 22,
    },
  ])
);

interface User4 {
  name: string;
  age: number;
}

function sumOfAges(users: User4[]) {
  let sum = 0;
  users.forEach((x) => (sum += x.age));
  return sum;
}

console.log(
  sumOfAges([
    {
      name: "luffy",
      age: 20,
    },
    {
      name: "zoro",
      age: 21,
    },
    {
      name: "nami",
      age: 20,
    },
  ])
);

// Pick allows you to create a new type by selecting a set of properties (Keys) from an existing type (Type).
type updatedUser = Pick<User, 'email' |'age' | 'address' | "firstname">

function updateUSer(user:updatedUser){
  // Here You Should Make DB call to upadte fields
  console.log(`name: ${user.firstname} email:${user.email} age:${user.age}  city ${user.address?.city}`)
} 

