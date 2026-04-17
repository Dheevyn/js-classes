//Question 1
const numbers = [2, 4, 6, 8, 10];

//Using forEach to multipy each value by 2
numbers.forEach((num) => {
  console.log(num * 2);
});

//Question 2
const names = ["Esther", "John", "Ada", "Mike"];

//Using forEach to print each message in a single format
names.forEach((name) => {
  console.log("hello " + name + "!");
});

//Section B: Question 3
const numbres = [1, 2, 3, 4, 5];

//Using map method to square each number
const numSqr = numbres.map((numbre) => numbre * 2);
console.log(numSqr);

//Question 4
const prices = [100, 200, 300];
//using map method to create values discounted by 10%
const dscPrice = prices.map((price) => price - price * (10 / 100));
console.log(dscPrice);

//Question 5
const nombers = [5, 12, 8, 20, 3];

//Using filter method to a new array of numbers > 10
const greaterNum = nombers.filter((nomber) => {
  return nomber > 10;
});
console.log(greaterNum);

//Question 6
const ages = [15, 22, 17, 30, 18];

//Using filter to return ages >= 18
const adults = ages.filter((age) => {
  return age >= 18;
});
console.log(adults);

//Question 7
const nombres = [10, 15, 20, 25, 30];

//Using filter method to get the numbers > 20
const greaterNom = nombres.filter((nombre) => nombre > 20);
console.log(greaterNom);

//Using map method to double the numbers after being filtered
const remains = greaterNom.map((nombre) => nombre * 2);
console.log(remains);
