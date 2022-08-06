let clothes = [
  ["yellow_hat", "headgear"],
  ["blue_sunglasses", "eyewear"],
  ["green_turban", "headgear"],
];

const solution = () => {
  let answer = 1;
  let hashmap = new Map();
  for (var i = 0; i < clothes.length; i++) {
    let tmp = clothes[i];
    if (hashmap.has(tmp[1]) === true) {
      hashmap.set(tmp[1], hashmap.get(tmp[1]) + 1);
    } else {
      hashmap.set(tmp[1], 1);
    }
  }

  for (let value of hashmap.values()) {
    answer *= value + 1;
  }
  return answer - 1;
};

console.log(solution());
