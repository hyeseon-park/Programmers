let words = ["em", "pe", "mp", "ee", "pp", "me", "ep", "em", "em", "me"];

var longestPalindrome = function (words) {
  let cnt = 0;
  let hashmap = new Map();
  let sHashmap = new Map();

  for (var i = 0; i < words.length; i++) {
    let word = words[i];
    if (word[0] === word[1]) {
      sHashmap.set(word, sHashmap.has(word) ? sHashmap.get(word) + 1 : 1);
    } else {
      hashmap.set(word, hashmap.has(word) ? hashmap.get(word) + 1 : 1);
    }
  }

  let isHashEmpty = true;
  sHashmap.forEach((value, key) => {
    if (value % 2 === 0) {
      cnt += value * 2;
      isHashEmpty = false;
      sHashmap.delete(key);
    } else if (value % 2 === 1 && value > 2) {
      cnt += (value - 1) * 2;
      isHashEmpty = false;
      sHashmap.set(key, 1);
    }
  }); // 대칭으로 들어가는 경우
  if (sHashmap.size !== 0) cnt += 2; // 가운데 들어가는 경우

  hashmap.forEach((value, key) => {
    let tmp = key[1] + key[0];
    if (hashmap.has(tmp)) {
      cnt += (value > hashmap.get(tmp) ? hashmap.get(tmp) : value) * 4;
      hashmap.delete(key);
      hashmap.delete(tmp);
    }
  });

  return cnt;
};

console.log(longestPalindrome(words));
