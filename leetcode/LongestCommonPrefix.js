let strs = ["flower", "flow", "flight"];

var longestCommonPrefix = function (strs) {
  let standardArr = strs[0].split("");
  for (var i = 1; i < strs.length; i++) {
    let targetArr = strs[i];
    for (var j = 0; j < standardArr.length; j++) {
      if (standardArr[j] !== targetArr[j]) {
        standardArr.splice(j, standardArr.length - j);
        break;
      }
    }
  }
  return standardArr.toString().replace(/,/g, "");
};

var longestCommonPrefix = function (strs) {
  let standardStr = strs[0];
  for (var i = 1; i < strs.length; i++) {
    let targetStr = strs[i];
    for (var j = 0; j < standardStr.length; j++) {
      if (standardStr.charAt(j) !== targetStr.charAt(j)) {
        standardStr = standardStr.substring(0, j);
        break;
      }
    }
  }
  return standardStr;
};

console.log(longestCommonPrefix(strs));
