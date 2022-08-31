let name = "alex";
let typed = "aaleexa";

var isLongPressedName = function (name, typed) {
  let typedArr = [];
  let cut = 0;
  for (var i = 0; i < typed.length; i++) {
    if (typed[i] !== typed[i + 1]) {
      typedArr.push(typed.slice(cut, i + 1));
      cut = i + 1;
    }
  }

  let nameArr = [];
  cut = 0;
  for (var i = 0; i < name.length; i++) {
    if (name[i] !== name[i + 1]) {
      nameArr.push(name.slice(cut, i + 1));
      cut = i + 1;
    }
  }

  if (nameArr.length !== typedArr.length) return false;
  for (var i = 0; i < nameArr.length; i++) {
    if (typedArr[i].charAt(0) !== nameArr[i].charAt(0)) {
      return false;
    }
    if (typedArr[i].length < nameArr[i].length) {
      return false;
    }
  }
  return true;
};

var isLongPressedName = function (name, typed) {
  let nameArr = name.split("");
  let typedArr = typed.split("");
  let n = 0;
  let i = 0;
  while (n < nameArr.length && i < typedArr.length) {
    if (nameArr[n] === typedArr[i]) {
      n++;
    } else {
      if (i === 0 || typedArr[i] !== typedArr[i - 1]) {
        return false;
      }
    }
    i++;
  }
  return i === typed.length;
};

console.log(isLongPressedName(name, typed));
