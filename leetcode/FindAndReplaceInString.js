let s = "abcd";
let indices = [0, 2];
let sources = ["a", "cd"];
let targets = ["eee", "ffff"];

var findReplaceString = function (s, indices, sources, targets) {
  let arr = [];
  for (var i = 0; i < indices.length; i++) {
    arr.push([indices[i], sources[i], targets[i]]);
  }
  arr.sort((a, b) => a[0] - b[0]);

  let acc = 0;
  for (var i = 0; i < arr.length; i++) {
    let indice = arr[i][0];
    let len = arr[i][1].length;
    let tmpS = s.substring(indice + acc, indice + len + acc);
    if (tmpS === arr[i][1]) {
      s =
        s.substring(0, indice + acc) +
        ("*" + i + "*") +
        s.substring(indice + len + acc, s.length);
      acc += ("*" + i + "*").length - len;
    }
  }

  for (var i = 0; i < targets.length; i++) {
    s = s.replace("*" + i + "*", arr[i][2]);
  }
  return s;
};

console.log(findReplaceString(s, indices, sources, targets));
