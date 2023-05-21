function solution(numbers) {
  numbers.sort((a, b) => a - b);
  return numbers[0] * numbers[1] >
    numbers[numbers.length - 1] * numbers[numbers.length - 2]
    ? numbers[0] * numbers[1]
    : numbers[numbers.length - 1] * numbers[numbers.length - 2];
}

console.log(solution([1, 2, -3, 4, -5]));
