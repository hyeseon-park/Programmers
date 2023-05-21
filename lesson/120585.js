function solution(array, height) {
  return array.filter((a) => a > height).length;
}

console.log(solution([149, 180, 192, 170], 167));
