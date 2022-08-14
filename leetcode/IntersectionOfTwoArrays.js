let nums1 = [1, 2, 2, 1];
let nums2 = [2, 2];

var intersection = function (nums1, nums2) {
  let hashmap = new Map();

  for (var i in nums1) {
    hashmap.set(nums1[i], 1);
  }

  for (var i in nums2) {
    if (hashmap.has(nums2[i])) {
      hashmap.set(nums2[i], hashmap.get(nums2[i]) - 1);
    }
  }

  let arr = [];
  hashmap.forEach(function (value, key) {
    if (value <= 0) arr.push(key);
  });

  return arr;
};

console.log(intersection(nums1, nums2));
