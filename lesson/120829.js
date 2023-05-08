function solution(angle) {
  return Math.floor(angle / 90) + Math.ceil(angle / 90);
}

console.log(solution(180));
