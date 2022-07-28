const priorities = [1, 1, 9, 1, 1, 1];
const location = 0;

const solution = () => {
  let cnt = 0;

  let priCopy = new Array(priorities.length).fill(0);
  for (var i = 0; i < priorities.length; i++) {
    priCopy[i] = priorities[i];
  }
  priCopy.sort((a, b) => b - a);

  while (priCopy.length !== 0) {
    for (var i = 0; i < priorities.length; i++) {
      if (priorities[i] === priCopy[0]) {
        priCopy.shift();
        cnt++;
        if (i === location) {
          priCopy = [];
          break;
        }
      }
    }
  }

  return cnt;
};

console.log(solution());
