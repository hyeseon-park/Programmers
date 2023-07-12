var minFlips = function (target) {
  let cnt = 0;
  for (let i = 1; i < target.length; i++) {
    if (target[i - 1] !== target[i]) cnt++;
  }
  return cnt === 0 ? 0 : target[0] === "0" ? cnt : cnt + 1;
};

console.log(minFlips("01000"));
