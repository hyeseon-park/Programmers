function solution(numbers) {
  var answer = numbers.reduce(
    (accumulator, currentNumber) => accumulator + currentNumber
  );

  return answer / numbers.length;
}

console.log(solution([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
