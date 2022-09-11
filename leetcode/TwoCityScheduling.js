let costs = [
  [515, 563],
  [451, 713],
  [537, 709],
  [343, 819],
  [855, 779],
  [457, 60],
  [650, 359],
  [631, 42],
];

var twoCitySchedCost = function (costs) {
  let gapArr = [];
  let aSum = 0;
  for (var i = 0; i < costs.length; i++) {
    aSum += costs[i][0];
    gapArr.push(costs[i][1] - costs[i][0]);
  }
  gapArr.sort((a, b) => a - b);
  for (var i = 0; i < gapArr.length / 2; i++) {
    aSum += gapArr[i];
  }
  return aSum;
};

console.log(twoCitySchedCost(costs));
