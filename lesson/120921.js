function solution(A, B) {
  for (let i = 0; i < A.length; i++) {
    if (A === B) return i;
    A = A.substring(A.length - 1, A.length) + A.substring(0, A.length - 1);
  }
  return -1;
}

console.log(solution("abc", "abc"));
