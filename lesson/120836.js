function solution(n) {
  var answer = 0;

  for (let i = 1; i <= n; i++) {
    if (i > n / i) {
      return answer * 2;
    } else if (i === n / i) {
      return answer * 2 + 1;
    }
    if (n % i === 0) {
      answer++;
    }
  }
  return 1;
}

console.log(solution(7));
