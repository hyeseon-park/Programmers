let words = ["cool", "lock", "cook"];

var commonChars = function (words) {
  let word = words[0];
  let standardArr = word.split("");

  for (var i = 1; i < words.length; i++) {
    let target = words[i];
    let targetArr = target.split("");
    for (var j = 0; j < standardArr.length; j++) {
      if (targetArr.includes(standardArr[j]) === false) {
        standardArr[j] = 0;
      } else {
        targetArr[targetArr.indexOf(arr[j])] = 0;
      }
    }
  }

  return arr.filter((val) => val !== 0);
};

console.log(commonChars(words));
