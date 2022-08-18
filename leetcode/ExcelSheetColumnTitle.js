let columnNumber = 52;

var convertToTitle = function (columnNumber) {
  let anx = "";

  let quotient = columnNumber;
  while (quotient > 0) {
    let remainder = quotient % 26;
    if (quotient <= 26 && remainder === 0) {
      let alphabet = String.fromCharCode(quotient + 64);
      anx = alphabet + anx;
      break;
    } else if (quotient > 26 && remainder === 0) {
      let alphabet = String.fromCharCode(26 + 64);
      anx = alphabet + anx;
      quotient = parseInt(quotient / 26) - 1;
    } else {
      let alphabet = String.fromCharCode(remainder + 64);
      anx = alphabet + anx;
      quotient = parseInt(quotient / 26);
    }
  }

  return anx;
};

console.log(convertToTitle(columnNumber));
