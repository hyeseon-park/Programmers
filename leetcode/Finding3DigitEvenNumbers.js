let digits = [0, 2, 1, 3];

var findEvenNumbers = function (digits) {
  let set = new Set();

  for (var i = 0; i < digits.length; i++) {
    if (digits[i] === 0) continue;
    for (var j = 0; j < digits.length; j++) {
      if (i === j) continue;
      for (var k = 0; k < digits.length; k++) {
        if (i === k) continue;
        if (j === k) continue;
        if (digits[k] % 2 !== 0) continue;
        let num = String(digits[i]) + String(digits[j]) + String(digits[k]);
        set.add(Number(num));
      }
    }
  }

  return Array.from(set).sort((a, b) => a - b);
};

console.log(findEvenNumbers(digits));
