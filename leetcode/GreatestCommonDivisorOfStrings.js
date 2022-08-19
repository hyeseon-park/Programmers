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

var gcdOfStrings = function (str1, str2) {
  if (str1 + str2 !== str2 + str1) {
    return "";
  } else if (str1 === str2) {
    return str1;
  } else if (str1.length > str2.length) {
    return gcdOfStrings(str1.slice(str2.length), str2);
  } else {
    return gcdOfStrings(str2.slice(str1.length), str1);
  }
};

console.log(gcdOfStrings(str1, str2));
