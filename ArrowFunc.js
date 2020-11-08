function sayHello(name = "eunjin") {
  return "hello " + name;
}

//Arrow Function
const sayHello2 = (name = "eunjin!") => "hello " + name;

const eunjin = sayHello();
const eunjin2 = sayHello2();

console.log(eunjin);
console.log(eunjin2);
