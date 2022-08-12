let s = "([{}])";

var isValid = function (s) {
  let arr = [];
  arr.push(s.charAt(0));
  s = s.substring(1);

  while (s.length !== 0) {
    let pop = arr[arr.length - 1];
    let char = s.charAt(0);
    s = s.substring(1);

    if (pop === "(") {
      if (char === ")") {
        arr.pop();
      } else {
        arr.push(char);
      }
    } else if (pop === "{") {
      if (char === "}") {
        arr.pop();
      } else {
        arr.push(char);
      }
    } else if (pop === "[") {
      if (char === "]") {
        arr.pop();
      } else {
        arr.push(char);
      }
    } else {
      arr.push(char);
    }
  }

  return arr.length === 0;
};

var isValid = function (s) {
  let arr = [];
  for (var i = 0; i < s.length; i++) {
    if (s.charAt(i) === "(") {
      arr.push(")");
    } else if (s.charAt(i) === "{") {
      arr.push("}");
    } else if (s.charAt(i) === "[") {
      arr.push("]");
    } else if (arr.length === 0 || arr.pop() !== s.charAt(i)) {
      return false;
    }
  }
  return arr.length === 0;
};

console.log(isValid(s));
