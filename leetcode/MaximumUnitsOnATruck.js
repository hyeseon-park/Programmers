let boxTypes = [
  [1, 3],
  [5, 5],
  [2, 5],
  [4, 2],
  [4, 1],
  [3, 1],
  [2, 2],
  [1, 3],
  [2, 5],
  [3, 2],
];
let truckSize = 35;

var maximumUnits = function (boxTypes, truckSize) {
  let arr = [];
  for (let i in boxTypes) {
    for (var j = 0; j < boxTypes[i][0]; j++) {
      arr.push(boxTypes[i][1]);
    }
  }
  arr.sort((a, b) => b - a);
  let sum = 0;
  for (var i = 0; i < (truckSize > arr.length ? arr.length : truckSize); i++) {
    sum += arr[i];
  }
  return sum;
};

console.log(maximumUnits(boxTypes, truckSize));
