let timePoints = ["00:00", "04:00", "22:00"];

var findMinDifference = function (timePoints) {
  let mArr = [];
  timePoints.map((t) => {
    let arr = t.split(":");
    mArr.push(Number(arr[0] * 60) + Number(arr[1]));
  });
  mArr.sort((a, b) => a - b);
  let min = 24 * 60;
  for (var i = 0; i < mArr.length - 1; i++) {
    let gap = mArr[i + 1] - mArr[i];
    if (gap < min) min = gap;
  }
  let reverseGap = 24 * 60 - mArr[mArr.length - 1] + mArr[0];
  if (reverseGap < min) min = reverseGap;
  return min;
};

console.log(findMinDifference(timePoints));
