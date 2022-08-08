const nums = [4, 1, 2, 1, 2];

var singleNumber = function (nums) {
  nums.sort((a, b) => a - b);
  let arr = [];
  for (let i in nums) {
    if (arr.includes(nums[i])) {
      arr.pop();
    } else {
      arr.push(nums[i]);
    }
  }
  return arr[0];
};

var singleNumber = function (nums) {
  return nums.reduce((prev, curr) => prev ^ curr);
};

console.log(singleNumber(nums));
