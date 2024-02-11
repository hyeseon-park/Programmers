const phone_book = ["123", "456", "789", "124", "79", "7891"];

const solution = () => {
  phone_book.sort();

  for (let i = 0; i < phone_book.length; i++) {
    for (let j = i + 1; j < phone_book.length; j++) {
      if (phone_book[j].startsWith(phone_book[i])) return false;
      break;
    }
  }
  return true;
};

console.log(solution());
