let lowLimit = 19;
let highLimit = 28;

var countBalls = function (lowLimit, highLimit) {
  let hashmap = new Map();
  for (var i = lowLimit; i <= highLimit; i++) {
    let numSum = 0;
    if (i >= 10) {
      for (var j = 0; j < String(i).length; j++) {
        numSum += Number(String(i).charAt(j));
      }
      hashmap.set(numSum, hashmap.has(numSum) ? hashmap.get(numSum) + 1 : 1);
    } else {
      hashmap.set(i, hashmap.has(i) ? hashmap.get(i) + 1 : 1);
    }
  }

  return Math.max(...hashmap.values());
};

console.log(countBalls(lowLimit, highLimit));
