function solution(n, k) {
  return 12000 * n + 2000 * (k - Math.floor(n / 10));
}

console.log(solution(64, 6));
