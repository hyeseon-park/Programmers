const nums = [3, 3, 3, 2, 2, 2];

const solution = () => {
  let result = nums.length / 2;
  let set = [...new Set(nums)];

  return result > set.size ? set.size : result;
};

console.log(solution());
