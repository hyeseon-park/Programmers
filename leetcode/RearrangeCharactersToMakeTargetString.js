let s = "abbaccaddaeea";
let target = "aaaaa";

var rearrangeCharacters = function (s, target) {
  let cnt = 0;
  let isEnd = false;

  while (isEnd === false) {
    for (var i = 0; i < target.length; i++) {
      if (s.includes(target[i])) {
        s =
          s.substring(0, s.indexOf(target[i])) +
          s.substring(s.indexOf(target[i]) + 1, s.length);
      } else {
        isEnd = true;
        break;
      }
    }
    cnt++;
  }

  return cnt - 1;
};

console.log(rearrangeCharacters(s, target));
