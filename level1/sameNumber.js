function solution(arr) {
  return arr.filter((a, index) => a !== arr[index - 1]);
}

console.log(solution([4, 4, 4, 3, 3]));
