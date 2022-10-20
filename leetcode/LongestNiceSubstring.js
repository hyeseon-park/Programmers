let s = "YazaAay";

var longestNiceSubstring = function (s) {
  if (s.length < 2) return "";

  let set = new Set();
  for (var i = 0; i < s.length; i++) set.add(s[i]);

  for (var i = 0; i < s.length; i++) {
    if (set.has(s[i].toUpperCase()) && set.has(s[i].toLowerCase())) continue;
    let sub1 = longestNiceSubstring(s.substring(0, i));
    let sub2 = longestNiceSubstring(s.substring(i + 1));
    return sub1.length >= sub2.length ? sub1 : sub2;
  }

  return s;
};

console.log(longestNiceSubstring(s));
