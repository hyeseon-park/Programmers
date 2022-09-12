let s = "TB";

var letterCasePermutation = function (s) {
  let arr = [];
  let sArr = s.split("");
  backtracking(arr, 0, sArr);
  return arr;
};

var backtracking = function (arr, i, sArr) {
  if (i === sArr.length) {
    arr.push(sArr.join(""));
  } else {
    if (isNaN(sArr[i])) {
      sArr[i] = sArr[i].toUpperCase();
      backtracking(arr, i + 1, sArr);
      sArr[i] = sArr[i].toLowerCase();
      backtracking(arr, i + 1, sArr);
    } else {
      backtracking(arr, i + 1, sArr);
    }
  }
};

console.log(letterCasePermutation(s));
