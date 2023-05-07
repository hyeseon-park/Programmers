function solution(n) {
  let anx = 1;
  while (true) {
    if (7 * anx >= n && n > 7 * (anx - 1)) {
      return anx;
    } else {
      anx += 1;
    }
  }
}

console.log(solution(15));
