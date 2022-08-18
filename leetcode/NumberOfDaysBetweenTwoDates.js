let date1 = "2019-06-29";
let date2 = "2019-06-25";

var daysBetweenDates = function (date1, date2) {
  return Math.abs(new Date(date2) - new Date(date1)) / (1000 * 60 * 60 * 24);
};

console.log(daysBetweenDates(date1, date2));
