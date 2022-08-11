let ransomNote = "aa";
let magazine = "ab";

var canConstruct = function (ransomNote, magazine) {
  let isAnx = true;
  let ransomNoteArr = ransomNote.split("");
  let magazineArr = magazine.split("");

  for (var i = 0; i < ransomNoteArr.length; i++) {
    if (magazineArr.includes(ransomNoteArr[i])) {
      magazineArr[magazineArr.indexOf(ransomNoteArr[i])] = "";
    } else {
      isAnx = false;
      break;
    }
  }
  return isAnx;
};

console.log(canConstruct(ransomNote, magazine));
