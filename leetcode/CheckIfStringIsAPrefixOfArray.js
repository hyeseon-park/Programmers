let s = "iloveleetcode";
let words = ["apples", "i", "love", "leetcode"];

var isPrefixString = function (s, words) {
  let tmp = "";
  for (var i in words) {
    tmp += words[i];
    if (tmp === s) {
      return true;
    }
  }
  return false;
};

console.log(isPrefixString(s, words));
