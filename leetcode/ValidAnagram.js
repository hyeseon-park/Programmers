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

var isAnagram = function (s, t) {
  let hashmap = new Map();
  for (var i = 0; i < s.length; i++) {
    let char = s.charAt(i);
    if (hashmap.has(char)) {
      hashmap.set(char, hashmap.get(char) + 1);
    } else {
      hashmap.set(char, 1);
    }
  }
  for (var i = 0; i < t.length; i++) {
    let char = t.charAt(i);
    if (hashmap.has(char)) {
      if (hashmap.get(char) < 1) {
        return false;
      } else {
        hashmap.set(char, hashmap.get(char) - 1);
      }
    } else {
      return false;
    }
  }

  let is = true;
  hashmap.forEach((value) => {
    if (Number(value) !== 0) is = false;
  });
  return is;
};

console.log(isAnagram(s, t));
