let points = [
  [1, 1],
  [2, 2],
  [3, 3],
  [4, 4],
  [5, 5],
];
let queries = [
  [1, 2, 2],
  [2, 2, 2],
  [4, 3, 2],
  [4, 3, 3],
];

var countPoints = function (points, queries) {
  let anxArr = [];
  for (var i = 0; i < queries.length; i++) {
    let x = queries[i][0];
    let y = queries[i][1];
    let rad = queries[i][2];
    let cnt = 0;
    for (var j = 0; j < points.length; j++) {
      let dis = (points[j][0] - x) ** 2 + (points[j][1] - y) ** 2;
      if (dis - rad ** 2 <= 0) {
        cnt++;
      }
    }
    anxArr.push(cnt);
  }
  return anxArr;
};

console.log(countPoints(points, queries));
