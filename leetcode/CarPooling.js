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
    for (var j = from; j < to; j++) {
      if (num > capacity || hashmap.get(j) + num > capacity) return false;
      hashmap.set(j, hashmap.has(j) ? hashmap.get(j) + num : num);
    }
  }

  return true;
};

console.log(carPooling(trips, capacity));
