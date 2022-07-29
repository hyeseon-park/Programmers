const words = ["a", "ab", "abc", "d", "cd", "bcd", "abcd"];

var maxProduct = function (words) {
  var ans = 0;
  let target = words.shift();
  let choosedNext = 0;
  while (words.length !== 0) {
    for (var i = 0; i < words.length; i++) {
      let next = words[i];
      let same = false;
      for (var j = 0; j < target.length; j++) {
        let targetChar = target.charAt(j);
        let result = next.indexOf(targetChar);
        if (result !== -1) {
          same = true;
          break;
        }
        if (same) break;
      }
      if (same === false) {
        let tmp = target.length * next.length;
        if (tmp > ans) {
          ans = tmp;
        }
      }
    }
    target = words.shift();
  }
  return ans;
};

console.log(maxProduct(words));
