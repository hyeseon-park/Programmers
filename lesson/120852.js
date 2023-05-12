function solution(n) {
  var answer = new Set();
  for (let i = 2; i <= n; i++) {
    if (n % i === 0) {
      answer.add(i);
      n /= i;
      i--;
    }
  }
  return Array.from(answer);
}

console.log(solution(36));
