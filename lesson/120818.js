function solution(price) {
  if (price >= 500000) {
    return price * 0.8;
  } else if (price < 500000 && price >= 300000) {
    return price * 0.9;
  } else if (price >= 100000) {
    return Math.floor(price * 0.95);
  } else {
    return price;
  }
}

console.log(solution(580000));
