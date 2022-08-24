let rings = "G4";

var countPoints = function (rings) {
  let cnt = 0;
  let hashmap = new Map();
  for (var i = 0; i < rings.length; i++) {
    rings[i + 1];
    hashmap.set(
      rings[i + 1],
      hashmap.has(rings[i + 1])
        ? hashmap.get(rings[i + 1]) + rings[i]
        : rings[i]
    );
    i++;
  }

  hashmap.forEach(function (value) {
    if (new Set(value).size === 3) cnt++;
  });

  return cnt;
};

console.log(countPoints(rings));
