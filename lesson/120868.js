function solution(sides) {
  sides.sort((a, b) => a - b);

  let set = new Set();
  for (let i = sides[1] - sides[0] + 1; i <= sides[1]; i++) set.add(i);
  for (let i = sides[1]; i < sides[1] + sides[0]; i++) set.add(i);

  return set.size;
}

console.log(solution([11, 7]));
