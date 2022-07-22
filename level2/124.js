let n = 12;

const solution = () => {
  let answer = "";
  let left = 0;

  while (n > 0) {
    left = n % 3;
    n = parseInt(n / 3);
    if (left === 0) {
      left = 4;
      n -= 1;
    }
    answer = left + answer;
  }

  return answer;
};

console.log(solution());
