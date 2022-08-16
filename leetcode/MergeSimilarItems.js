let items1 = [
  [1, 1],
  [4, 5],
  [3, 8],
];
let items2 = [
  [3, 1],
  [1, 5],
];

var mergeSimilarItems = function (items1, items2) {
  let hashmap = new Map();
  for (var i = 0; i < items1.length; i++) {
    hashmap.set(items1[i][0], items1[i][1]);
  }
  for (var i = 0; i < items2.length; i++) {
    if (hashmap.has(items2[i][0])) {
      hashmap.set(items2[i][0], hashmap.get(items2[i][0]) + items2[i][1]);
    } else {
      hashmap.set(items2[i][0], items2[i][1]);
    }
  }

  return [...hashmap.entries()].sort((a, b) => a[0] - b[0]);
};

console.log(mergeSimilarItems(items1, items2));
