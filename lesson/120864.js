function solution(my_string) {
  let sum = 0;
  let tmp = "";
  let arr = my_string.split("");

  for (let i = 0; i < arr.length; i++) {
    tmp += arr[i];
    if (!isNaN(Number(tmp))) {
      if (isNaN(arr[i + 1])) sum += Number(tmp);
    } else {
      tmp = "";
    }
  }

  return sum;
}

console.log(solution("1a2b3c4d123"));
