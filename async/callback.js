//async 비동기
console.log("1");
setTimeout(() => console.log("2"), 1000); //
console.log("3");

//콜백함수: 내가 전달한 함수를 나중에 니가 불러줘
function printImmediately(print) {
  print();
}

printImmediately(() => console.log("hello")); // 동기

function printWithDelay(print, timeout) {
  setTimeout(print, timeout); //
}

printWithDelay(() => console.log("async callback"), 2000); // 비동기

// 콜백함수 안에서 다른 콜백함수를 부르고 부르고 부르고

// 콜백 지옥 체험

class UserStorage {
  loginUser(id, password, onSuccess, onError) {
    setTimeout(() => {
      if (id === "1" && password === "2") {
        onSuccess(id);
      } else {
        onError(new Error("not found"));
      }
    }, 2000);
  }
  getRoles(user, onSuccess, onError) {
    setTimeout(() => {
      if (user === "1") {
        onSuccess({ name: "hyeseon", role: "admin" });
      } else {
        onError(new Error("no access"));
      }
    }, 2000);
  }
}

const userStorage = new UserStorage();
const id = 1;
const password = 2;

userStorage.loginUser(
  id,
  password,
  (user) => {
    userStorage.getRoles(
      user,
      (userWithRole) => {
        console.log(
          `Hello ${userWithRole.name}, you have a ${userWithRole.role} role`
        );
      },
      (error) => {
        console.log(error);
      }
    );
  },
  (error) => {
    console.log(error);
  }
);
