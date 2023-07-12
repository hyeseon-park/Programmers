var maxCoins = function (piles) {
  piles.sort((a, b) => b - a);
  let sum = 0;
  let idx = 1;
  for (let i = 0; i < piles.length / 3; i++) {
    sum += piles[idx];
    idx += 2;
  }

  return sum;
};

console.log(maxCoins([2, 4, 1, 2, 7, 8]));
