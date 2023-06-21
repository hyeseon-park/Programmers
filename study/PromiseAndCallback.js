function async1(callback) {
  setTimeout(() => {
    callback("1초 후 실행");
  }, 1000);
}

async1(function (msg) {
  console.log(msg);
});

function async1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("1초 후 실행");
    }, 1000);
  });
}

async1().then((res) => {
  console.log(res);
});
