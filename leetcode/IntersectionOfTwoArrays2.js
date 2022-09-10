let nums1 = [4, 9, 5];
let nums2 = [9, 4, 9, 8, 4];

var intersect = function (nums1, nums2) {
  let arr = [];
  for (var i = 0; i < nums1.length; i++) {
    for (var j = 0; j < nums2.length; j++) {
      if (nums2[j] === nums1[i]) {
        arr.push(nums1[i]);
        nums2.splice(j, 1);
        break;
      }
    }
  }
  return arr;
};

console.log(intersect(nums1, nums2));
