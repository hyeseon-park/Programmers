let nums1 = [1, 2, 3, 0, 0, 0];
let m = 3;
let nums2 = [2, 5, 6];
let n = 3;

var merge = function (nums1, m, nums2, n) {
  nums1.splice(m, n);
  for (var i = 0; i < m + n; i++) {
    if (nums1[i] >= nums2[0]) {
      nums1.splice(i, 0, nums2.shift());
    }
  }
  if (nums2.length !== 0) {
    for (var j = 0; j < nums2.length; j++) {
      nums1.push(nums2[j]);
    }
  }
};

console.log(merge(nums1, m, nums2, n));
