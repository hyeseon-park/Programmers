let g = [1, 2];
let s = [1, 2, 3];

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

console.log(findContentChildren(g, s));
