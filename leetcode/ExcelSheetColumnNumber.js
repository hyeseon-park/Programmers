let columnTitle = "ZY";

var titleToNumber = function (columnTitle) {
  let anx = 0;
  let i = 0;
  while (columnTitle.length !== 0) {
    let tmp = columnTitle.charAt(columnTitle.length - 1);
    let num = tmp.charCodeAt([0]) - 64;
    anx += num * 26 ** i;
    columnTitle = columnTitle.substring(0, columnTitle.length - 1);
    i++;
  }
  return anx;
};

console.log(titleToNumber(columnTitle));
