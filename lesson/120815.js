function solution(n) {
  let anx = 1;

  while (true) {
    if ((6 * anx) % n === 0) {
      return anx;
    } else {
      anx += 1;
    }
  }
}

console.log(solution(4));
