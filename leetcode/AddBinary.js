let a = "11011";
let b = "110";

var addBinary = function (a, b) {
  const aBin = `0b${a}`;
  const bBin = `0b${b}`;
  const sum = BigInt(aBin) + BigInt(bBin);
  return sum.toString(2);
};

var addBinary = function (a, b) {
  a = a.split("").reverse().join("");
  b = b.split("").reverse().join("");
  let len = a.length > b.length ? a.length : b.length;
  let result = [];
  for (var i = 0; i < len; i++) {
    let num1 = Number(a[i] || 0);
    let num2 = Number(b[i] || 0);
    let curr = Number(result[i] || 0) + num1 + num2;
    if (curr >= 2) {
      result[i] = curr % 2;
      result.push(1);
    } else {
      result[i] = curr;
    }
  }
  return result.reverse().join("");
};

console.log(addBinary(a, b));
