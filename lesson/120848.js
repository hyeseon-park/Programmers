function solution(n) {
  var answer = 0;
  let f = 1;

  while (f <= n) {
    answer++;
    f *= answer;
  }

  return answer - 1;
}

console.log(solution(7));
