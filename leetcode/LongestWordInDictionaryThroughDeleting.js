let s = "abce";
let dictionary = ["abe", "abc"];

var findLongestWord = function (s, dictionary) {
  let anx = "";
  let sArr = s.split("");

  for (var i = 0; i < dictionary.length; i++) {
    let word = dictionary[i];
    for (var j = 0; j < sArr.length; j++) {
      if (word[0] === sArr[j]) {
        word = word.substring(1, word.length);
      }
      if (word === "") {
        if (dictionary[i].length > anx.length) {
          anx = dictionary[i];
        } else if (dictionary[i].length === anx.length) {
          if (dictionary[i].localeCompare(anx) < 0) {
            anx = dictionary[i];
          }
        }
        break;
      }
    }
  }

  return anx;
};

console.log(findLongestWord(s, dictionary));
