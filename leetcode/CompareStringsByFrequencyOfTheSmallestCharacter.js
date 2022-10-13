let queries = ["cbd"];
let words = ["zaaaz"];

var numSmallerByFrequency = function (queries, words) {
  let anxArr = [];

  for (var j = 0; j < words.length; j++) words[j] = f(words[j]);

  for (var i = 0; i < queries.length; i++) {
    let qNum = f(queries[i]);
    let cnt = 0;
    for (var j = 0; j < words.length; j++) {
      if (qNum < words[j]) cnt++;
    }
    anxArr.push(cnt);
  }
  return anxArr;
};

var f = function (s) {
  let arr = s.split("").sort();
  let result = arr.reduce((cnt, data) => (data === arr[0] ? cnt + 1 : cnt), 0);
  return result;
};

console.log(numSmallerByFrequency(queries, words));
