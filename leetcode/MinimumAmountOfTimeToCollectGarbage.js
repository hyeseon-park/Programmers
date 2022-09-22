let garbage = ["MMM", "PGM", "GP"];
let travel = [3, 10];

var garbageCollection = function (garbage, travel) {
  let minute = 0;

  garbage.map((c) => (minute += c.length));
  ["M", "P", "G"].map((c) => (minute += collectGarbage(garbage, travel, c)));

  return minute;
};

var collectGarbage = function (garbage, travel, type) {
  let minute = 0;
  for (var i = garbage.length - 1; i >= 0; i--) {
    if (garbage[i].includes(type)) {
      for (var j = 0; j < i; j++) minute += travel[j];
      break;
    }
  }
  return minute;
};

console.log(garbageCollection(garbage, travel));
