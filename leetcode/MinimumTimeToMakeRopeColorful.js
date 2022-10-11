let colors = "aabaa";
let neededTime = [1, 2, 3, 4, 1];

var minCost = function (colors, neededTime) {
  let timeSum = 0;
  let prevColor = colors[0];
  let prevTime = neededTime[0];

  for (var i = 1; i < colors.length; i++) {
    if (prevColor === colors[i]) {
      if (prevTime < neededTime[i]) {
        prevColor = colors[i];
        timeSum += prevTime;
        prevTime = neededTime[i];
      } else {
        timeSum += neededTime[i];
      }
    } else {
      prevColor = colors[i];
      prevTime = neededTime[i];
    }
  }
  return timeSum;
};

console.log(minCost(colors, neededTime));
