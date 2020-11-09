const numbers = [2, 45, 6564, 33, 345, 45, 3, 6, 12, 112, 46, 78, 8, 98, 8];
const testCondition = (number) => number < 15;
//const biggerThan15 = numbers.filter((number) => number > 15);
const smallThan15 = numbers.filter(testCondition);
//console.log(biggerThan15);
console.log(smallThan15);

let posts = ["hi", "hello", "bye"];
posts = posts.filter((post) => post !== "bye");
console.log(posts);
