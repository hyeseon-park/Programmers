let words = ["a", "b", "a"];

var removeAnagrams = function (words) {
  for (var i = 0; i < words.length - 1; i++) {
    let tmpArr1 = words[i].split("");
    let rearrange1 = tmpArr1.sort().join("");
    let tmpArr2 = words[i + 1].split("");
    let rearrange2 = tmpArr2.sort().join("");

    if (rearrange1 === rearrange2) {
      words.splice(i + 1, 1);
      i--;
    }
  }
  return words;
};

console.log(removeAnagrams(words));
