let s = "   fly me   to   the moon  ";

var lengthOfLastWord = function (s) {
  let arr = s.split(" ");
  arr = arr.filter((val) => val !== "");
  return arr[arr.length - 1].length;
};

var lengthOfLastWord = function (s) {
  return s.trim().split(" ").pop().length;
};

console.log(lengthOfLastWord(s));
