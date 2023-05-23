function solution(a, b) {
  for (let i = 2; i <= Math.min(a, b); i++) {
    if (a % i === 0 && b % i === 0) {
      a = a / i;
      b = b / i;
    }
  }

  while (b % 2 === 0 || b % 5 === 0) {
    if (b % 2 === 0) b /= 2;
    if (b % 5 === 0) b /= 5;
  }

  return b === 1 ? 1 : 2;
}

console.log(solution(12, 21));
