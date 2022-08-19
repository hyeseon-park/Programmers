let logs = [
  [2033, 2034],
  [2039, 2047],
  [1998, 2042],
  [2047, 2048],
  [2025, 2029],
  [2005, 2044],
  [1990, 1992],
  [1952, 1956],
  [1984, 2014],
];

var maximumPopulation = function (logs) {
  let hashmap = new Map();
  let max = 0;
  let maxArr = [];
  for (var i = 0; i < logs.length; i++) {
    for (var j = logs[i][0]; j < logs[i][1]; j++) {
      hashmap.set(j, hashmap.has(j) ? hashmap.get(j) + 1 : 1);
      if (hashmap.get(j) > max) {
        maxArr = [];
        maxArr.push(j);
        max = hashmap.get(j);
      } else if (hashmap.get(j) === max) {
        maxArr.push(j);
      }
    }
  }
  maxArr.sort((a, b) => a - b);
  return maxArr[0];
};

console.log(maximumPopulation(logs));
