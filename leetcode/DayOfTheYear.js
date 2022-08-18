let date = "2019-01-09";

var dayOfYear = function (date) {
  let start = date.substring(0, 4);
  let startDate = new Date(start + "-01-01");
  let now = new Date(date);
  const days = (now - startDate) / (24 * 60 * 60 * 1000);
  return days + 1;
};

var dayOfYear = function (date) {
  return (
    (new Date(date) - new Date(date.substring(0, 4))) / (24 * 60 * 60 * 1000) +
    1
  );
};

console.log(dayOfYear(date));
