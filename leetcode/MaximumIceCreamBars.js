let costs = [1, 6, 3, 1, 2, 5];
let coins = 20;

var maxIceCream = function (costs, coins) {
  let sum = 0;
  costs.sort((a, b) => a - b);
  for (var i = 0; i < costs.length; i++) {
    sum += costs[i];
    if (sum > coins) return i;
  }
  return costs.length;
};

console.log(maxIceCream(costs, coins));
