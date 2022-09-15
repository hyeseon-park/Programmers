let groupSizes = [3, 3, 3, 3, 3, 1, 3];

var groupThePeople = function (groupSizes) {
  let arr = [];
  let hashmap = new Map();
  for (var i = 0; i < groupSizes.length; i++) {
    if (hashmap.has(groupSizes[i])) {
      let tmpArr = hashmap.get(groupSizes[i]);
      tmpArr.push(i);
      hashmap.set(groupSizes[i], tmpArr);
    } else {
      hashmap.set(groupSizes[i], [i]);
    }
  }

  hashmap.forEach((value, key) => {
    if (value.length > key) {
      for (var i = 0; i < value.length / key; i++) {
        arr.push(value.slice(i * key, i * key + key));
      }
    } else {
      arr.push(value);
    }
  });
  return arr;
};

console.log(groupThePeople(groupSizes));
