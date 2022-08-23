let words = ["leetcoder", "leetcode", "od", "hamlet", "am"];

var stringMatching = function (words) {
  let set = new Set();
  for (var i = 0; i < words.length; i++) {
    for (var j = 0; j < words.length; j++) {
      if (i === j) continue;
      if (words[i].includes(words[j])) {
        set.add(words[j]);
      }
    }
  }
  return [...set];
};

console.log(stringMatching(words));
