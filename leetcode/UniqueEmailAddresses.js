let emails = [
  "test.email+alex@leetcode.com",
  "test.e.mail+bob.cathy@leetcode.com",
  "testemail+david@lee.tcode.com",
];

var numUniqueEmails = function (emails) {
  for (var i in emails) {
    var email = emails[i];
    var arr = email.split("@");
    var local = arr[0];
    if (local.includes("+")) {
      local = local.substring(0, local.indexOf("+"));
    }
    local = local.replaceAll(".", "");
    emails[i] = local + "@" + arr[1];
  }
  const set = new Set(emails);
  return set.size;
};

console.log(numUniqueEmails(emails));
