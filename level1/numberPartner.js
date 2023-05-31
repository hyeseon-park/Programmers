function solution(X, Y) {
  let anx = "";

  let xArr = new Array(10).fill(0);
  let yArr = new Array(10).fill(0);
  for (x of X.split("")) xArr[x]++;
  for (y of Y.split("")) yArr[y]++;

  for (let i = 9; i >= 0; i--) {
    if (xArr[i] > 0 && yArr[i] > 0) {
      if (i === 0 && anx === "") {
        anx = "0";
        break;
      }
      if (xArr[i] > yArr[i]) {
        anx += String(i).repeat(yArr[i]);
      } else {
        anx += String(i).repeat(xArr[i]);
      }
    }
  }

  return anx === "" ? "-1" : anx;
}

console.log(solution("5525", "1255"));
