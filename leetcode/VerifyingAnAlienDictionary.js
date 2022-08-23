let words = ["word", "world", "row"];
let order = "worldabcefghijkmnpqstuvxyz";

var isAlienSorted = function (words, order) {
  let orderArr = order.split("");

  for (var i = 0; i < words.length - 1; i++) {
    for (var j = 0; j < order.length; j++) {
      let firstWord = words[i].charAt(j);
      let spelling1 = orderArr.indexOf(firstWord);
      let secondWord = words[i + 1].charAt(j);
      let spelling2 = orderArr.indexOf(secondWord);

      if (spelling1 > spelling2) {
        return false;
      } else if (spelling1 === spelling2) {
        continue;
      } else {
        break;
      }
    }
  }
  return true;
};

console.log(isAlienSorted(words, order));
