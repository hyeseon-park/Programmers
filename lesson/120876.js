function solution(lines) {
  let set = new Set();
  lines.sort((a, b) => a[0] - b[0]);
  if (lines[0][1] > lines[1][0]) {
    for (let i = lines[1][0]; i < Math.min(lines[0][1], lines[1][1]); i++)
      set.add(i);
  }
  if (lines[1][1] > lines[2][0]) {
    for (let i = lines[2][0]; i < Math.min(lines[1][1], lines[2][1]); i++)
      set.add(i);
  }
  if (lines[0][1] > lines[2][0]) {
    for (let i = lines[2][0]; i < Math.min(lines[0][1], lines[2][1]); i++)
      set.add(i);
  }
  return set.size;
}

console.log(
  solution([
    [-1, 1],
    [1, 3],
    [3, 9],
  ])
);
