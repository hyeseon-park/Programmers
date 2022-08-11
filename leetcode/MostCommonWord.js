let paragraph = "abc abc? abcd the jeff!";
let banned = ["abc", "abcd", "jeff"];

var mostCommonWord = function (paragraph, banned) {
  var reg = /[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/gi;
  let arr = paragraph.replace(reg, " ").toLowerCase().split(" ");
  arr = arr.filter((val) => val != "");
  let hashmap = new Map();
  arr.map(
    (word) =>
      !banned.includes(word) &&
      (hashmap.has(word)
        ? hashmap.set(word, hashmap.get(word) + 1)
        : hashmap.set(word, 1))
  );
  return [...hashmap.entries()].reduce((a, b) => (a[1] > b[1] ? a : b))[0];
};

console.log(mostCommonWord(paragraph, banned));
