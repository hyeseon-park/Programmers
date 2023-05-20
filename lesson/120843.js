function solution(numbers, k) {
  return numbers[((k - 1) * 2) % numbers.length];
}

console.log(solution([1, 2, 3], 3));
