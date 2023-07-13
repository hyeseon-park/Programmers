function solution(participant, completion) {
  let anx = "";
  let hashmap = new Map();
  for (i in participant) {
    hashmap.set(
      participant[i],
      hashmap.has(participant[i]) ? hashmap.get(participant[i]) + 1 : 1
    );
  }
  for (i in completion) {
    hashmap.set(
      completion[i],
      hashmap.has(completion[i]) ? hashmap.get(completion[i]) + 1 : 1
    );
  }

  hashmap.forEach((value, key) => {
    if (Number(value) % 2 !== 0) {
      anx = key;
    }
  });
  return anx;
}

console.log(solution(["leo", "kiki", "eden"], ["eden", "kiki"]));
