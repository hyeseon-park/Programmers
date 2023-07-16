function solution(numbers) {
  let cnt = 0;
  let numArr = numbers.split("");
  let set = new Set();
  makeNumbers(set, "", numArr);
  return set.size;
}

// 배열 경우의 수
function makeNumbers(set, cur, nums) {
  if (nums.length === 0) return;
  let clone = nums.slice().reverse();
  nums.forEach(function (i) {
    let su = clone.pop();
    let num = Number(cur + su);
    if (isPrime(num)) {
      set.add(num);
    }
    makeNumbers(set, cur + su, clone);
    clone.unshift(su);
  });
}

// 소수인지 확인
function isPrime(num) {
  if (num < 2) return false;
  if (num === 2) return true;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return true;
}

console.log(solution("011"));
