class Human {
  constructor(name, lastName) {
    this.name = name;
    this.lastName = lastName;
  }
}
const eunjin = new Human("eunjin", "kim");
console.log(eunjin.name);

class Baby extends Human {
  cry() {
    console.log("Waaaaa");
  }
}
const myBaby = new Baby("mini", "me");
console.log(myBaby.cry());
