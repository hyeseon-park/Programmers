function solution(my_string) {
  let str = "";
  for (let i = 0; i < my_string.length; i++)
    str +=
      my_string[i] === my_string[i].toLowerCase()
        ? my_string[i].toUpperCase()
        : my_string[i].toLowerCase();
  return str;
}

console.log(solution("cccCCC"));
