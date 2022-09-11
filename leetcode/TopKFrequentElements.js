let nums = [1];
let k = 1;

var topKFrequent = function (nums, k) {
  let arr = [];
  let hashmap = new Map();
  for (var i = 0; i < nums.length; i++) {
    hashmap.set(nums[i], hashmap.has(nums[i]) ? hashmap.get(nums[i]) + 1 : 1);
  }
  let tmp = [...hashmap.entries()].sort((a, b) => b[1] - a[1]);
  for (var i = 0; i < k; i++) {
    arr.push(tmp[i][0]);
  }
  return arr;
};

console.log(topKFrequent(nums, k));
