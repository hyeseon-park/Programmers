function solution(num, k) {
  return (
    String(num).indexOf(String(k)) +
    (String(num).indexOf(String(k)) >= 0 ? 1 : 0)
  );
}

console.log(solution(123456, 1));
