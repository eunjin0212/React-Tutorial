const days = ["Mon", "Tues", "Wed"];
const otherDays = ["Thu", "Fri", "Sat"];
const allDays = [...days, ...otherDays];

console.log(allDays);

const ob = {
  first: "hi",
  second: "hello",
};
const ab = {
  thrid: "bye",
};
const two = {
  ...ob,
  ...ab,
};
console.log(two);
