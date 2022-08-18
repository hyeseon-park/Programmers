let columnNumber = 701;

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

var convertToTitle = function (columnNumber) {
  let anx = "";

  while (columnNumber > 0) {
    columnNumber--;
    let remainder = columnNumber % 26;
    columnNumber = parseInt(columnNumber / 26);
    anx = String.fromCharCode(remainder + 65) + anx;
  }

  return anx;
};

console.log(convertToTitle(columnNumber));
