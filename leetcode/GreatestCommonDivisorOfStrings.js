let str1 = "ABABABAB";
let str2 = "ABAB";

var gcdOfStrings = function (str1, str2) {
  let arr = [];
  let short = str1.length < str2.length ? str1 : str2;
  let long = str1.length >= str2.length ? str1 : str2;

  if (long.includes(short)) {
    for (var i = 1; i < short.length + 1; i++) {
      if (short.substring(0, i).repeat(short.length / i) === short) {
        if (short.substring(0, i).repeat(long.length / i) === long) {
          arr.push(short.substring(0, i));
        }
      }
    }
  }
  arr.sort((a, b) => b.length - a.length);
  if (arr.length === 0) {
    return "";
  } else {
    return arr[0];
  }
};

console.log(gcdOfStrings(str1, str2));
