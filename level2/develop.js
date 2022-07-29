const progresses = [20, 99, 93, 30, 55, 10];
const speeds = [5, 10, 1, 1, 30, 5];

const solution = () => {
  let returnArr = [];

  let days = [];
  for (var i = 0; i < progresses.length; i++) {
    let day = Math.ceil((100 - progresses[i]) / speeds[i]);
    days.push(day);
  }

  let target = days.shift();
  let count = 1;
  while (days.length !== 0) {
    let next = days.shift();
    if (target >= next) {
      count++;
    } else {
      returnArr.push(count);
      target = next;
      count = 1;
    }
  }
  returnArr.push(count);
  return returnArr;
};

console.log(solution());
