const human = {
  name: "eunjin",
  lastName: "Kim",
  nationality: "Wish i was Korean",
  favFood: {
    breakfast: "Sang",
    lunch: "donc",
    dinner: "Sang" + "donc",
  },
};
// const name = human.name;
// const lastName = human.lastName;
// const difNmae = human.nationality;
//const dinner = human.favFood.dinner;

const {
  name,
  lastName,
  nationality: difName,
  favFood: { dinner, breakfast, lunch },
} = human;
console.log(name, lastName, difName, dinner, breakfast, lunch);
