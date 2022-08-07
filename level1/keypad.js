let numbers = [1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5];
let hand = "right";

const solution = () => {
  let anx = "";
  let left = [3, 0];
  let right = [3, 2];

  for (var i in numbers) {
    let now = solve(numbers[i]);

    anx += "L";
    anx += "R";
  }
  return "";
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
