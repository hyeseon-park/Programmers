let s = "}]()[{";

const solution = () => {
  let answer = 0;
  for (var i = 0; i < s.length - 1; i++) {
    if (checkBracket(s)) {
      answer += 1;
    }
    s = s.substring(1) + s.charAt(0);
  }
  return answer;
};

const checkBracket = (str) => {
  let arr = [];
  arr.push(str.charAt(0));
  for (var i = 1; i < str.length; i++) {
    if (arr[arr.length - 1] === "(" && str.charAt(i) === ")") {
      arr.pop();
    } else if (arr[arr.length - 1] === "[" && str.charAt(i) === "]") {
      arr.pop();
    } else if (arr[arr.length - 1] === "{" && str.charAt(i) === "}") {
      arr.pop();
    } else {
      arr.push(str.charAt(i));
    }
  }

  if (arr.length === 0) {
    return true;
  } else {
    return false;
  }
};

console.log(solution());
