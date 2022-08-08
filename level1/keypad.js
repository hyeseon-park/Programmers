let numbers = [1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5];
let hand = "right";

const solution = () => {
  let anx = "";
  let left = [3, 0];
  let right = [3, 2];

  for (var i in numbers) {
    let n = numbers[i];
    let now = solve(n);
    if (n === 1 || n === 4 || n === 7) {
      anx += "L";
      left = now;
    } else if (n === 3 || n === 6 || n === 9) {
      anx += "R";
      right = now;
    } else {
      let LD = Math.abs(left[0] - now[0]) + Math.abs(left[1] - now[1]);
      let RD = Math.abs(right[0] - now[0]) + Math.abs(right[1] - now[1]);

      if (LD < RD) {
        anx += "L";
        left = now;
      } else if (RD < LD) {
        anx += "R";
        right = now;
      } else {
        if (hand === "left") {
          anx += "L";
          left = now;
        } else {
          anx += "R";
          right = now;
        }
      }
    }
  }
  return anx;
};

const solve = (pos) => {
  let key = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    ["*", 0, "#"],
  ];
  for (var i = 0; i < 4; i++) {
    for (var j = 0; j < 3; j++) {
      if (key[i][j] === pos) {
        return [i, j];
      }
    }
  }
};

console.log(solution());
