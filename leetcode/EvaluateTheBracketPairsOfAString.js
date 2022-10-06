let s = "hi(name)(name)(name)hi";
let knowledge = [["a", "b"]];

var evaluate = function (s, knowledge) {
  for (var i = 0; i < knowledge.length; i++) {
    let key = "(" + knowledge[i][0] + ")";
    if (s.indexOf(key) !== -1) {
      s = s.replaceAll(key, knowledge[i][1]);
    }
  }

  let newS = "";
  let bracketOpen = false;

  for (var i = 0; i < s.length; i++) {
    if (s[i] === "(") bracketOpen = true;
    if (bracketOpen === false) newS += s[i];
    if (s[i] === ")") {
      bracketOpen = false;
      newS += "?";
    }
  }

  return newS;
};

var evaluate = function (s, knowledge) {
  let hashmap = new Map();
  for (var i = 0; i < knowledge.length; i++) {
    hashmap.set("(" + knowledge[i][0] + ")", knowledge[i][1]);
  }

  while (s.indexOf("(") !== -1) {
    let tmpKey = s.substring(s.indexOf("("), s.indexOf(")") + 1);
    if (hashmap.has(tmpKey)) {
      s = s.replaceAll(tmpKey, hashmap.get(tmpKey));
    } else {
      s = s.replaceAll(tmpKey, "?");
    }
  }
  return s;
};

console.log(evaluate(s, knowledge));
