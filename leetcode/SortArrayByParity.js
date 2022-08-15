let nums = [3, 1, 2, 4];

var sortArrayByParity = function (nums) {
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) {
      let arr = [];
      arr.push(nums[i]);
      nums.splice(i, 1);
      nums = arr.concat(nums);
    }
  }
  return nums;
};

console.log(sortArrayByParity(nums));
