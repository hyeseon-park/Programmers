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

var sortArrayByParity = function (nums) {
  let arr = [];
  let notArr = [];
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) {
      arr.push(nums[i]);
    } else {
      notArr.push(nums[i]);
    }
  }

  return arr.concat(notArr);
};

console.log(sortArrayByParity(nums));
