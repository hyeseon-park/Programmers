function solution(score) {
  let arr = score.map((a) => (a[0] + a[1]) / 2);
  let copy = [...arr].sort((a, b) => b - a);
  return arr.map((a) => copy.indexOf(a) + 1);
}

console.log(
  solution([
    [80, 70],
    [70, 80],
    [30, 50],
    [90, 100],
    [100, 90],
    [100, 100],
    [10, 30],
  ])
);
