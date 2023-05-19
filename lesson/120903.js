function solution(s1, s2) {
  let cnt = 0;
  for (s of s2) if (s1.includes(s)) cnt++;
  return cnt;
}

console.log(solution(["a", "b", "c"], ["com", "b", "d", "p", "c"]));
