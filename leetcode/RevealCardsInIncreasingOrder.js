let deck = [1, 1000];

var deckRevealedIncreasing = function (deck) {
  let anx = [];
  deck.sort((a, b) => b - a);

  for (var i = 0; i < deck.length; i++) {
    if (i !== 0) {
      let pop = anx.pop();
      anx.unshift(pop);
    }
    anx.unshift(deck[i]);
  }

  return anx;
};

console.log(deckRevealedIncreasing(deck));
