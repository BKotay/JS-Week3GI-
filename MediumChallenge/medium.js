function sharePizza (numberOfPizzas, numberOfPeople){
   let slicesOfPizza = numberOfPizzas / numberOfPeople;
   //toFixed rounds to the closest decimal with the number chosen within the parenthesis.
   //slicesOfPizza = Math.round(slicesOfPizza * 100)/100
   slicesOfPizza = slicesOfPizza.toFixed(3)
   return `Each person gets ${slicesOfPizza}; from our ${numberOfPizzas} slice pizza`
}

console.log(sharePizza(8, 2))
console.log(sharePizza(8, 3)); 
console.log(sharePizza(21, 20));
console.log(sharePizza(10, 3));