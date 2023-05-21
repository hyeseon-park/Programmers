function solution(dots) {
  let fix = dots[0];
  let x;
  let y;
  for (let i = 1; i < 4; i++) {
    if (fix[0] === dots[i][0]) y = dots[i][1] - fix[1];
    if (fix[1] === dots[i][1]) x = dots[i][0] - fix[0];
  }
  return Math.abs(x * y);
}

console.log(
  solution([
    [-1, -1],
    [1, 1],
    [1, -1],
    [-1, 1],
  ])
);
