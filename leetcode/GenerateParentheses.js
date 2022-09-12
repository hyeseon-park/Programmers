let n = 1;

var generateParenthesis = function (n) {
  let arr = [];
  backtracking(arr, 0, n * 2, "");
  return arr;
};

var backtracking = function (arr, i, n, str) {
  if (i === n) {
    if (checkParentheses(str)) {
      arr.push(str);
    }
  } else {
    backtracking(arr, i + 1, n, str + "(");
    backtracking(arr, i + 1, n, str + ")");
  }
};

var checkParentheses = function (str) {
  let arr = [];
  for (var i = 0; i < str.length; i++) {
    if (arr[arr.length - 1] + str[i] === "()") {
      arr.pop();
    } else {
      arr.push(str[i]);
    }
  }
  return arr.length === 0;
};

console.log(generateParenthesis(n));
