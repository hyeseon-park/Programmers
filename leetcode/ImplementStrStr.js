let haystack = "aaaaa";
let needle = "bba";

var strStr = function (haystack, needle) {
  for (var i = 0; i < haystack.length; i++) {
    if (haystack.substring(i, i + needle.length) === needle) {
      return i;
    }
  }
  if (haystack.length === 0) {
    return 0;
  } else {
    return -1;
  }
};

console.log(strStr(haystack, needle));
