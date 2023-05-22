function solution(board) {
  let cnt = 0;
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board.length; j++) {
      if (
        isNotMine(i - 1, j - 1, board) &&
        isNotMine(i - 1, j, board) &&
        isNotMine(i - 1, j + 1, board) &&
        isNotMine(i, j - 1, board) &&
        isNotMine(i, j, board) &&
        isNotMine(i, j + 1, board) &&
        isNotMine(i + 1, j - 1, board) &&
        isNotMine(i + 1, j, board) &&
        isNotMine(i + 1, j + 1, board)
      ) {
        cnt++;
      }
    }
  }
  return cnt;
}

function isNotMine(i, j, board) {
  if (i < 0 || i >= board.length || j < 0 || j >= board.length) {
    return true;
  } else {
    if (board[i][j] === 1) {
      return false;
    } else {
      return true;
    }
  }
}

console.log(
  solution([
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0],
  ])
);
