let nums = ["123", "4", "12", "34"];
let target = "1234";

var numOfPairs = function (nums, target) {
  let cnt = 0;
  for (var i = 0; i < nums.length; i++) {
    console.log(nums[i]);
    for (var j = 0; j < nums.length; j++) {
      console.log(nums[j]);
      if (i !== j) {
        console.log(nums[i] + nums[j]);
        if (nums[i] + nums[j] === target) {
          cnt++;
        }
      }
    }
  }
  return cnt;
};

console.log(numOfPairs(nums, target));
