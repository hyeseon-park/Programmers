function solution(array, n) {
  array.sort((a, b) => Math.abs(n - a) - Math.abs(n - b) || a - b);
  return array[0];
}

console.log(solution([-10, -12], -11));
//17 10 8
