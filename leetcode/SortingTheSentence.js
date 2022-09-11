let s = "Myself2 Me1 I4 and3";

var sortSentence = function (s) {
  let sArr = s.split(" ");
  let ansArr = new Array(sArr.length - 1);

  for (var i = 0; i < sArr.length; i++) {
    let word = sArr[i];
    let tmpWord = word.substring(0, word.length - 1);
    let tmpNum = word.substring(word.length - 1, word.length);
    ansArr[tmpNum - 1] = tmpWord;
  }

  return ansArr.join(" ");
};

console.log(sortSentence(s));
