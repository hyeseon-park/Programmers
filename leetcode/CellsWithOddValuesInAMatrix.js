let m = 2;
let n = 2;
let indices = [
  [1, 1],
  [0, 0],
];

var oddCells = function (m, n, indices) {
  let cnt = 0;
  let arr = Array.from(Array(m), () => Array(n).fill(0));
  for (var i = 0; i < indices.length; i++) {
    let row = indices[i][0];
    for (var j = 0; j < arr[0].length; j++) {
      arr[row][j] += 1;
    }
    let column = indices[i][1];
    for (var j = 0; j < arr.length; j++) {
      arr[j][column] += 1;
    }
  }
  for (var i = 0; i < arr.length; i++) {
    let tmp = arr[i];
    for (var j = 0; j < tmp.length; j++) {
      if (arr[i][j] % 2 === 1) cnt++;
    }
  }
  return cnt;
};

console.log(oddCells(m, n, indices));
