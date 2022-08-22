let boxes = "001011";

var minOperations = function (boxes) {
  let arr = boxes.split("");
  let anxArr = new Array(arr.length);
  for (var i = 0; i < arr.length; i++) {
    let sum = 0;
    for (var j = 0; j < arr.length; j++) {
      if (i === j) continue;
      if (arr[j] === "1") {
        sum += Math.abs(i - j);
      }
    }
    anxArr[i] = sum;
  }
  return anxArr;
};

console.log(minOperations(boxes));
