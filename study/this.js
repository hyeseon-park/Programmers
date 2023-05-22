let someone = {
  name: "hyeseon",
  whoAmI: function () {
    console.log(this);
  },
};

someone.whoAmI(); // {name: 'hyeseon', whoAmI: ƒ}

let myWhoAmI = someone.whoAmI;
myWhoAmI(); // Window {}

// let btn = document.getElementById("btn");
// btn.addEventListener("click", someone.whoAmI); // <button id="btn">버튼</button>
// btn.addEventListener("click", myWhoAmI); // <button id="btn">버튼</button>

let bindedWhoAmI = myWhoAmI.bind(someone);
bindedWhoAmI(); // {name: 'hyeseon', whoAmI: ƒ}

function foo() {
  console.log(this);
}

foo(); // Window {}

const obj = {
  list: [1, 2, 3],
  foo,
};

obj.foo(); // {list: Array(3), foo: ƒ}
