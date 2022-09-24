let trips = [
  [9, 0, 1],
  [3, 3, 7],
];
let capacity = 4;

var carPooling = function (trips, capacity) {
  let hashmap = new Map();
  for (var i = 0; i < trips.length; i++) {
    let num = trips[i][0];
    let from = trips[i][1];
    let to = trips[i][2];
    if (num > capacity) return false;
    for (var j = from; j < to; j++) {
      if (hashmap.get(j) + num > capacity) return false;
      hashmap.set(j, hashmap.has(j) ? hashmap.get(j) + num : num);
    }
  }

  return true;
};

var carPooling = function (trips, capacity) {
  let arr = new Array(1001).fill(0);
  trips.map((t) => {
    arr[t[1]] += t[0];
    arr[t[2]] -= t[0];
  });
  for (var i = 0; i < 1001 && capacity >= 0; ++i) capacity -= arr[i];

  return capacity >= 0;
};

console.log(carPooling(trips, capacity));
