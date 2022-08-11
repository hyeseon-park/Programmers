let licensePlate = "1s3 PSt";
let words = ["step", "steps", "stripe", "stepple"];

var shortestCompletingWord = function (licensePlate, words) {
  let anx = "";
  licensePlate = licensePlate
    .replace(/[0-9]/g, "")
    .replace(" ", "")
    .toLowerCase();
  let plate = licensePlate.split("");

  words.sort((a, b) => a.length - b.length);
  for (var i = 0; i < words.length; i++) {
    let targetArr = words[i].split("");
    let isAnx = true;
    for (var j = 0; j < plate.length; j++) {
      let now = plate[j];
      if (targetArr.includes(now) === false) {
        isAnx = false;
        break;
      } else {
        targetArr[targetArr.indexOf(now)] = "";
      }
    }
    if (isAnx) return words[i];
  }
  return anx;
};

console.log(shortestCompletingWord(licensePlate, words));
