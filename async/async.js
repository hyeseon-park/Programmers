function fetchUser() {
  return new Promise((resolve, reject) => {
    resolve("hyeseon");
  });
}

// async: 함수 앞에 async를 쓰면 코드 블럭이 자동으로 promise로 변환해줌
async function fetchUser() {
  return "hyeseon";
}

const user = fetchUser();
user.then(console.log);
console.log(user);

// await
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function getApple() {
  await delay(3000);
  return "apple";
}

// function getApple() {
//   return delay(3000).then(() => "apple");
// }

async function getBanana() {
  await delay(3000);
  return "banana";
}

function pickFruits() {
  return getApple().then((apple) => {
    return getBanana().then((banana) => `${apple} + ${banana}`);
  });
}

async function pickFruits() {
  try {
    const apple = await getApple();
    const banana = await getBanana();
  } catch {
    new Error("error");
  }
  return `${apple} + ${banana}`;
}

pickFruits().then(console.log);
