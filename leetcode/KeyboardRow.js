let words = ["omk"];

var findWords = function (words) {
  let arr = [];
  let first = "qwertyuiop".split("");
  let second = "asdfghjkl".split("");
  let third = "zxcvbnm".split("");

  for (var i = 0; i < words.length; i++) {
    let wordArr = words[i].toLowerCase();
    let pos = "";
    let is = true;

    for (var j = 0; j < wordArr.length; j++) {
      if (first.includes(wordArr[j])) {
        if (pos !== "" && pos !== "f") {
          is = false;
          continue;
        }
        pos = "f";
      } else if (second.includes(wordArr[j])) {
        if (pos !== "" && pos !== "s") {
          is = false;
          continue;
        }
        pos = "s";
      } else if (third.includes(wordArr[j])) {
        if (pos !== "" && pos !== "t") {
          is = false;
          continue;
        }
        pos = "t";
      }
    }
    if (is) arr.push(words[i]);
  }
  return arr;
};

console.log(findWords(words));
