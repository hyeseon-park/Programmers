let nums = [6, 4, 4, 8];

var smallerNumbersThanCurrent = function (nums) {
  let arr = [];
  for (var i = 0; i < nums.length; i++) {
    let cnt = 0;
    for (var j = 0; j < nums.length; j++) {
      if (nums[i] > nums[j]) {
        cnt++;
      }
    }
    arr[i] = cnt;
  }
  return arr;
};

var smallerNumbersThanCurrent = function (nums) {
  let sortedNums = [...nums].sort((a, b) => a - b);
  let arr = [];
  for (var i = 0; i < nums.length; i++) {
    arr.push(sortedNums.indexOf(nums[i]));
  }
  return arr;
};

console.log(smallerNumbersThanCurrent(nums));
