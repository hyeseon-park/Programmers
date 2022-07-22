const participant = ["mislav", "stanko", "mislav", "ana"];
const completion = ["stanko", "ana", "mislav"];

const solution = () => {
  let ans = "";
  var hashmap = new Map();

  for (var i = 0; i < participant.length; i++) {
    let name = participant[i];
    if (hashmap.has(name) === true) {
      hashmap.set(name, hashmap.get(name) + 1);
    } else {
      hashmap.set(name, 1);
    }
  }

  for (var i = 0; i < completion.length; i++) {
    let name = completion[i];
    let cnt = hashmap.get(name);
    hashmap.set(name, cnt - 1);
  }

  hashmap.forEach(function (value, key) {
    if (value !== 0) {
      ans = key;
    }
  });
  return ans;
};

console.log(solution());
