let g = [10, 9, 8, 7];
let s = [5, 6, 7, 8];

var findContentChildren = function (g, s) {
  let cnt = 0;
  g.sort((a, b) => a - b);
  s.sort((a, b) => a - b);
  for (var i = 0; i < g.length; i++) {
    for (var j = 0; j < s.length; j++) {
      if (g[i] <= s[j]) {
        s.splice(j, 1);
        cnt++;
        break;
      }
    }
  }
  return cnt;
};

var findContentChildren = function (g, s) {
  let cnt = 0;
  g.sort((a, b) => a - b);
  s.sort((a, b) => a - b);
  let i = 0;
  let j = 0;
  while (i < g.length && j < s.length) {
    if (g[i] <= s[j]) {
      cnt++;
      i++;
    }
    j++;
  }
  return cnt;
};

console.log(findContentChildren(g, s));
