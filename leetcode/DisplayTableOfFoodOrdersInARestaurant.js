let orders = [
  ["David", "3", "Ceviche"],
  ["Corina", "10", "Beef Burrito"],
  ["David", "3", "Fried Chicken"],
  ["Carla", "5", "Water"],
  ["Carla", "5", "Ceviche"],
  ["Rous", "3", "Ceviche"],
];

var displayTable = function (orders) {
  let tableSet = new Set();
  let menuSet = new Set();
  for (var i = 0; i < orders.length; i++) {
    tableSet.add(Number(orders[i][1]));
    menuSet.add(orders[i][2]);
  }
  let tableArr = [...tableSet].sort((a, b) => a - b);
  let menuArr = [...menuSet].sort();

  let arr = Array.from(Array(tableArr.length + 1), () =>
    Array(menuArr.length + 1).fill("0")
  );

  for (var i = 0; i < arr.length; i++) {
    arr[i][0] = String(tableArr[i - 1]);
  }
  for (var i = 0; i < arr[0].length; i++) {
    arr[0][i] = menuArr[i - 1];
  }
  arr[0][0] = "Table";

  for (var i = 0; i < orders.length; i++) {
    let tableIdx = tableArr.indexOf(Number(orders[i][1]));
    let menuIdx = menuArr.indexOf(orders[i][2]);
    arr[tableIdx + 1][menuIdx + 1] = String(
      Number(arr[tableIdx + 1][menuIdx + 1]) + 1
    );
  }
  return arr;
};

console.log(displayTable(orders));
