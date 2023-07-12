var customSortString = function (order, s) {
  return s
    .split("")
    .sort((a, b) => order.indexOf(a) - order.indexOf(b))
    .join("");
};

console.log(customSortString("cba", "abcd"));
