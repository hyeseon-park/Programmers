class UserStorage {
  loginUser(id, password) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (id === 1 && password === 2) {
          resolve(id);
        } else {
          reject(new Error("not found"));
        }
      }, 2000);
    });
  }

  getRoles(user) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (user === 1) {
          resolve({ name: "hyeseon", role: "admin" });
        } else {
          reject(new Error("no access"));
        }
      }, 1000);
    });
  }
}

const userStorage = new UserStorage();
const id = 1;
const password = 2;

userStorage
  .loginUser(id, password)
  .then((id) => userStorage.getRoles(id))
  .then((userWithRole) =>
    console.log(
      `Hello ${userWithRole.name}, you have a ${userWithRole.role} role`
    )
  )
  .catch(console.log);
