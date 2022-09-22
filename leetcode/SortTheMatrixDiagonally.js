let mat = [
  [11, 25, 66, 1, 69, 7],
  [23, 55, 17, 45, 15, 52],
  [75, 31, 36, 44, 58, 8],
  [22, 27, 33, 25, 68, 4],
  [84, 28, 14, 11, 5, 50],
];

var diagonalSort = function (mat) {
  let anxArr = Array.from(Array(mat.length), () => new Array(mat[0].length));
  let tmpArr = Array.from(
    Array(mat.length + mat[0].length - 1),
    () => new Array()
  );

  for (var i = 0; i < mat.length; i++) {
    for (var j = 0; j < mat[0].length; j++) {
      tmpArr[i - j + mat[0].length - 1].push(mat[i][j]);
    }
  }

  for (var i = 0; i < tmpArr.length; i++) {
    tmpArr[i].sort((a, b) => a - b);
  }

  for (var i = 0; i < anxArr.length; i++) {
    for (var j = 0; j < anxArr[0].length; j++) {
      anxArr[i][j] = tmpArr[i - j + mat[0].length - 1].shift();
    }
  }

  return anxArr;
};

console.log(diagonalSort(mat));
