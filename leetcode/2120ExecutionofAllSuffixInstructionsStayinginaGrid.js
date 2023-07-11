var executeInstructions = function (n, startPos, s) {
  let output = [];

  while (s.length > 0) {
    let cnt = 0;
    let tmpStartPos = [...startPos];
    for (let i in s) {
      switch (s[i]) {
        case "R":
          tmpStartPos[1] += 1;
          break;
        case "L":
          tmpStartPos[1] -= 1;
          break;
        case "U":
          tmpStartPos[0] -= 1;
          break;
        case "D":
          tmpStartPos[0] += 1;
          break;
      }

      if (
        tmpStartPos[0] > -1 &&
        tmpStartPos[0] < n &&
        tmpStartPos[1] > -1 &&
        tmpStartPos[1] < n
      ) {
        cnt++;
      } else {
        break;
      }
    }

    output.push(cnt);
    s = s.substring(1, s.length);
  }
  return output;
};
