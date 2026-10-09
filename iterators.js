let favCities = ["Chicago", "Houston", "San Antonio", "Denver", "Pasadena"];
favCities.forEach(city => {
    console.log(city.toUpperCase());
});
// CHICAGO
// HOUSTON
// SAN ANTONIO
// DENVER
// PASADENA

let numbers = [1, 2, 3, 4, 5];
let squares = numbers.map(num => num * num);
console.log(squares);// [1, 4, 9, 16, 25]

let scores = [85, 42, 90, 75, 30, 100];
let highScores = scores.filter(num => num >= 80);
console.log(highScores); // [85, 90, 100]

let favoriteFood = ["Flautas", "Hotdogs", "Hamburgers", "Pasta", "Steak"];
let foundFood = favoriteFood.find(food => food.length > 4);
console.log(foundFood);// Flautas

let prices = [130, 240, 320, 200, 110];
let totalBudget = 1000;

let remainingBudget = prices.reduce((currentBudget, price) => {
  return currentBudget - price;
}, totalBudget);

console.log(remainingBudget); // 0
console.log(remainingBudget >= 0 ? "Items fit within budget!" : "Over budget!"); // Item fits within budget!
