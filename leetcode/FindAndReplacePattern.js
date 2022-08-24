let words = ["abc", "deq", "mee", "aqq", "dkd", "ccc"];
let pattern = "abb";

var findAndReplacePattern = function (words, pattern) {
  let arr = [];

  for (var i = 0; i < words.length; i++) {
    let word = words[i];
    let hashmap = new Map();
    let isSame = true;

    for (var j = 0; j < word.length; j++) {
      let spelling = word[j];
      if (hashmap.has(pattern[j])) {
        if (hashmap.get(pattern[j]) === spelling) {
        } else {
          isSame = false;
          break;
        }
      } else {
        let values = Array.from(hashmap.values());
        if (values.includes(spelling)) {
          isSame = false;
          break;
        } else {
          hashmap.set(pattern[j], spelling);
        }
      }
    }
    if (isSame) arr.push(word);
  }

  return arr;
};

console.log(findAndReplacePattern(words, pattern));
