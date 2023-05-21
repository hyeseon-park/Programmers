function solution(keyinput, board) {
  let answer = [0, 0];
  let xMax = Math.floor(board[0] / 2);
  let yMax = Math.floor(board[1] / 2);

  for (k of keyinput) {
    if (k === "left" && answer[0] > -xMax) answer[0] -= 1;
    if (k === "right" && answer[0] < xMax) answer[0] += 1;
    if (k === "up" && answer[1] < yMax) answer[1] += 1;
    if (k === "down" && answer[1] > -yMax) answer[1] -= 1;
  }
  return answer;
}

console.log(solution(["down", "down", "down", "down", "down"], [7, 9]));
