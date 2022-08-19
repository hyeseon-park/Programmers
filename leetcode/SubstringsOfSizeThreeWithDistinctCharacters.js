let s = "aababcabc";

var countGoodSubstrings = function (s) {
  let cnt = 0;
  for (var i = 0; i < s.length - 2; i++) {
    let tmpS = s.substring(i, i + 3);
    let hashmap = new Map();
    let is = true;
    for (var j = 0; j < 3; j++) {
      if (hashmap.has(tmpS.charAt(j))) {
        is = false;
        break;
      }
      hashmap.set(tmpS.charAt(j), 1);
    }
    if (is) cnt++;
  }
  return cnt;
};

var countGoodSubstrings = function (s) {
  let cnt = 0;
  for (var i = 0; i < s.length - 2; i++) {
    let tmpS = s.substring(i, i + 3);
    let set = new Set(tmpS);
    if (set.size === 3) cnt++;
  }
  return cnt;
};

console.log(countGoodSubstrings(s));
