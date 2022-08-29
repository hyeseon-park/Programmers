let votes = ["BCA", "CAB", "CBA", "ABC", "ACB", "BAC"];

var rankTeams = function (votes) {
  let anxStr = "";
  let hashmap = new Map();
  let l = votes[0].length;

  for (var i in votes) {
    for (var j = 0; j < l; j++) {
      let c = votes[i].charAt(j);
      if (!hashmap.has(c)) {
        hashmap.set(c, new Array(l).fill(0));
      }
      hashmap.get(c)[j]++;
    }
  }

  let list = Array.from(hashmap.keys());
  list.sort((a, b) => {
    for (var i = 0; i < l; i++) {
      if (hashmap.get(a)[i] !== hashmap.get(b)[i]) {
        return hashmap.get(b)[i] - hashmap.get(a)[i];
      }
    }
    return a.charCodeAt([0]) - b.charCodeAt([0]);
  });

  for (var i in list) {
    anxStr += list[i];
  }
  return anxStr;
};

console.log(rankTeams(votes));
