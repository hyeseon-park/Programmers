const numbers = [3, 30, 34, 5, 9];

const solution = () => {
  let ans = "";
  numbers.sort(
    (a, b) => Number(String(b) + String(a)) - Number(String(a) + String(b))
  );
  for (var i = 0; i < numbers.length; i++) {
    if (ans === "0") ans = "";
    ans += numbers[i];
  }
  return ans;
};

console.log(solution());
