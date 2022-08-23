let bank = ["000", "111", "000"];

var numberOfBeams = function (bank) {
  let anx = 0;

  for (var i = 0; i < bank.length; i++) {
    let preCnt = bank[i].split("1").length - 1;
    if (preCnt === 0) continue;

    for (var j = i + 1; j < bank.length; j++) {
      let nextCnt = bank[j].split("1").length - 1;
      if (nextCnt === 0) {
        continue;
      } else {
        anx += preCnt * nextCnt;
        break;
      }
    }
  }
  return anx;
};

console.log(numberOfBeams(bank));
