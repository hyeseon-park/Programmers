function solution(array, n) {
  return array.filter((num) => num === n).length;
}

console.log(solution([1, 1, 2, 3, 4, 5], 1));
