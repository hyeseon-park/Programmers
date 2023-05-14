function solution(sides) {
  sides.sort((a, b) => a - b);
  return sides[0] + sides[1] - sides[2] > 0 ? 1 : 2;
}

console.log(solution([3, 6, 2]));
