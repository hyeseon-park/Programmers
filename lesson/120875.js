function solution(dots) {
  if (
    (dots[0][1] - dots[1][1]) / (dots[0][0] - dots[1][0]) ===
      (dots[2][1] - dots[3][1]) / (dots[2][0] - dots[3][0]) ||
    (dots[0][1] - dots[2][1]) / (dots[0][0] - dots[2][0]) ===
      (dots[1][1] - dots[3][1]) / (dots[1][0] - dots[3][0]) ||
    (dots[0][1] - dots[3][1]) / (dots[0][0] - dots[3][0]) ===
      (dots[1][1] - dots[2][1]) / (dots[1][0] - dots[2][0])
  ) {
    return 1;
  } else {
    return 0;
  }
}

console.log(
  solution([
    [1, 4],
    [9, 2],
    [3, 8],
    [11, 6],
  ])
);
