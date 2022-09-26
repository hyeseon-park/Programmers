let cpdomains = [
  "900 google.mail.com",
  "50 yahoo.com",
  "1 intel.mail.com",
  "5 wiki.org",
];

var subdomainVisits = function (cpdomains) {
  let arr = [];
  let hashmap = new Map();
  for (var i = 0; i < cpdomains.length; i++) {
    let tmp = cpdomains[i].split(" ");
    let cnt = Number(tmp[0]);
    let domainStr = tmp[1];
    while (domainStr.length > 0) {
      hashmap.set(
        domainStr,
        hashmap.has(domainStr) ? hashmap.get(domainStr) + cnt : cnt
      );
      if (domainStr.indexOf(".") === -1) break;
      domainStr = domainStr.substring(domainStr.indexOf(".") + 1);
    }
  }
  hashmap.forEach((value, key) => {
    arr.push(value + " " + key);
  });
  return arr;
};

console.log(subdomainVisits(cpdomains));
