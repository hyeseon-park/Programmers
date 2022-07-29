const strs = ["eat", "tea", "tan", "ate", "nat", "bat"];

var groupAnagrams = function (strs) {
  var ans = [];
  var hashmap = new Map();
  for (var i = 0; i < strs.length; i++) {
    var str = strs[i];
    var reStr = str.split("").sort().join("");
    if (hashmap.has(reStr)) {
      let arr = hashmap.get(reStr);
      arr.push(strs[i]);
      hashmap.set(reStr, arr);
    } else {
      hashmap.set(reStr, [strs[i]]);
    }
  }
  hashmap.forEach((element) => ans.push(element));
  return ans;
};

console.log(groupAnagrams(strs));
