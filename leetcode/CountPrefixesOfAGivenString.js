let words = ["a", "b", "c", "ab", "bc", "abc"];
let s = "abc";

var countPrefixes = function (words, s) {
  let cnt = 0;
  for (var i in words) {
    if (s.startsWith(words[i])) {
      cnt++;
    }
  }
  return cnt;
};

console.log(countPrefixes(words, s));
