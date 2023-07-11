var triangularSum = function (nums) {
  if (nums.length === 1) return nums[0] % 10;
  let newNums = [];
  for (let i = 0; i < nums.length - 1; i++) {
    newNums.push((nums[i] + nums[i + 1]) % 10);
  }
  return triangularSum(newNums);
};

console.log(triangularSum([1, 2, 3, 4, 5]));
