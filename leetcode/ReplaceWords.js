let dictionary = ["aa", "a", "b", "c"];
let sentence = "aadsfasf absbs bbab cadsfafs";

var replaceWords = function (dictionary, sentence) {
  let sArr = sentence.split(" ");
  for (var i = 0; i < sArr.length; i++) {
    for (var j = 0; j < dictionary.length; j++) {
      if (sArr[i].startsWith(dictionary[j])) {
        sArr[i] = dictionary[j];
      }
    }
  }
  return sArr.join(" ");
};

console.log(replaceWords(dictionary, sentence));
