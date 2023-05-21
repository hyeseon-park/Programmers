function solution(array) {
  return array
    .join("")
    .split("")
    .filter((a) => a === "7").length;
}

console.log(solution([7777, 707, 785]));
