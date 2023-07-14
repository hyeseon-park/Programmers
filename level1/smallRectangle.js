function solution(sizes) {
  let wArr = [];
  let hArr = [];
  sizes.map((s) =>
    s[0] > s[1]
      ? wArr.push(s[0]) && hArr.push(s[1])
      : wArr.push(s[1]) && hArr.push(s[0])
  );

  wArr.sort((a, b) => b - a);
  hArr.sort((a, b) => b - a);
  return wArr[0] * hArr[0];
}

console.log(
  solution([
    [14, 4],
    [19, 6],
    [6, 16],
    [18, 7],
    [7, 11],
  ])
);
