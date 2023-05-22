function solution(spell, dic) {
  let str = spell.sort().join("");
  return dic.some((s) => str === s.split("").sort().join("")) ? 1 : 2;
}

console.log(solution(["z", "d", "x"], ["def", "dww", "dzx", "loveaw"]));
