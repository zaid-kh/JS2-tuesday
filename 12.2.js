const candyStore = {
  candies: [
    {
      name: "mint gum",
      id: "as12f",
      price: 2,
      amount: 2,
    },
    {
      name: "twix",
      id: "5hd7y",
      price: 5,
      amount: 4,
    },
  ],
  cashRegister: 200,
};
//The function should return the candy element with the specified id.
function getCandy(candyStore, id) {
  return candyStore.candies.find((c) => c.id === id);
}
// The function should return the price (number) of the candy with the specified id.
function getPrice(candyStore, id) {
  let candy = candyStore.candies.find((c) => c.id === id);
  return candy.price;
}

/* add a new candy to the candy list in 
candyStore with a default amount of 1. The function will not return anything.*/
function addCandy(candyStore, id, name, price) {
  candyStore.candies.push({ id: id, name: name, price: price, amount: 1 });
}
// add the candy price to the cashRegister, and decrease the amount property of the relevant candy.
function buy(candyStore, id) {
  let bought = getCandy(candyStore, id);
  candyStore.cashRegister += bought.price;
  bought.amount--;
}

console.log(getCandy(candyStore, "as12f"));
console.log(getPrice(candyStore, "5hd7y"));
addCandy(candyStore, "jaf65", "Reese's PB cup", 3);
console.log(getCandy(candyStore, "jaf65"));
console.log(getCandy(candyStore, "5hd7y"));
buy(candyStore, "5hd7y");
console.log(getCandy(candyStore, "5hd7y"));
console.log(candyStore.cashRegister);
