var groceryList =  [
  {food: "apples",
    price: 0.99},
    {food: "bread",
    price: 1.50},
    {food: "steak",
    price: 7.59},
    {food: "beer",
    price: 11.99},
    {food: "candy",
    price: 2.99},
    {food: "potatoes",
    price: 4.05},
    {food: "butter",
    price: 3.25},
    {food: "vodka",
    price: 3.99},
    {food: "cheese",
    price: 3.75},
    {food: "chicken", price: 5.67}
  ];
var total = 0;
var tax = 1.06;
groceryList.forEach(function(i){
  console.log("Food: " + i.food, "Price: " + i.price),
  total += i.price;
});
console.log("subtotal is " + total);
console.log("total is " + total * tax);
