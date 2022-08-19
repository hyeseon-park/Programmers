let num = "4206";

var largestOddNumber = function (num) {
  for (var i = num.length - 1; i >= 0; i--) {
    if (num.charAt(i) % 2 === 1) {
      return num.substring(0, i + 1);
    }
  }
  return "";
};

console.log(largestOddNumber(num));
