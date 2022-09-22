let garbage = ["MMM", "PGM", "GP"];
let travel = [3, 10];

var garbageCollection = function (garbage, travel) {
  let minute = 0;
  let mDone = false;
  let pDone = false;
  let gDone = false;

  for (var i = garbage.length - 1; i >= 0; i--) {
    minute += garbage[i].length;

    if (garbage[i].includes("M") && mDone === false) {
      mDone = true;
      for (var j = 0; j < i; j++) minute += travel[j];
    }
    if (garbage[i].includes("P") && pDone === false) {
      pDone = true;
      for (var j = 0; j < i; j++) minute += travel[j];
    }
    if (garbage[i].includes("G") && gDone === false) {
      gDone = true;
      for (var j = 0; j < i; j++) minute += travel[j];
    }
  }

  return minute;
};

console.log(garbageCollection(garbage, travel));
