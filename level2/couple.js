const s = "aabbaa";

const solution = () => {
  if (s.length % 2 == 1) return 0;

  let arr = [];
  arr.push(s.charAt(0));
  for (var i = 1; i < s.length; i++) {
    if (arr[arr.length - 1] === s.charAt(i)) {
      arr.pop();
    } else {
      arr.push(s.charAt(i));
    }
  }

  if (arr.length === 0) {
    return 1;
  } else {
    return 0;
  }
};

console.log(solution());
