function solution(n) {
  let arr = [];
  for (let i = 1; i <= n; i += 2) arr.push(i);
  return arr;
}

console.log(solution(15));
