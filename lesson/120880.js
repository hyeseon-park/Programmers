function solution(numlist, n) {
  return numlist.sort((a, b) => Math.abs(a - n) - Math.abs(b - n) || b - a);
}

console.log(solution([10000, 20, 36, 47, 40, 6, 10, 7000], 30));
