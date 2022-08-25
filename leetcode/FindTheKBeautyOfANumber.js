let num = 30003;
let k = 3;

var divisorSubstrings = function (num, k) {
  let cnt = 0;
  for (var i = 0; i < String(num).length - k + 1; i++) {
    let divisor = String(num).substring(i, i + k);
    if (Number(divisor) !== 0 && num % Number(divisor) === 0) {
      cnt++;
    }
  }
  return cnt;
};

console.log(divisorSubstrings(num, k));
