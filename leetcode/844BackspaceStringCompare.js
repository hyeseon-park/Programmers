var backspaceCompare = function (s, t) {
  let sArr = s.split("");
  let sStr = "";
  for (let i = 0; i < sArr.length; i++) {
    if (sArr[i] === "#") {
      sStr = sStr.substring(0, sStr.length - 1);
    } else {
      sStr += sArr[i];
    }
  }

  let tArr = t.split("");
  let tStr = "";
  for (let i = 0; i < tArr.length; i++) {
    if (tArr[i] === "#") {
      tStr = tStr.substring(0, tStr.length - 1);
    } else {
      tStr += tArr[i];
    }
  }
  return sStr === tStr;
};

console.log(backspaceCompare("ab##", "c#d#"));
