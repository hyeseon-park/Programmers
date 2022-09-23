let products = ["havana"];
let searchWord = "havana";

var suggestedProducts = function (products, searchWord) {
  let anxArr = [];
  products.sort();
  for (var i = 0; i < searchWord.length; i++) {
    let pre = searchWord.substring(0, i + 1);
    let tmpArr = [];
    for (var j = 0; j < products.length; j++) {
      if (products[j].startsWith(pre)) {
        tmpArr.push(products[j]);
        if (tmpArr.length === 3) break;
      }
    }
    anxArr.push(tmpArr);
  }
  return anxArr;
};

console.log(suggestedProducts(products, searchWord));
