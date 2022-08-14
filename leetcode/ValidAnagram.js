let s = "ab";
let t = "a";

var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;
  for (var i = 0; i < s.length; i++) {
    let char = s.charAt(i);
    t = t.replace(char, "");
  }
  return t.length === 0 ? true : false;
};

console.log(isAnagram(s, t));
