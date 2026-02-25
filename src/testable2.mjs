function diceRoll(random = Math.random) {
  const min = 1;
  const max = 6;
  return Math.floor(random() * (max + 1 - min) + min);
}

export function diceHandValue(die1 = null, die2 = null, random = Math.random) {
  const first = die1 ?? diceRoll(random);
  const second = die2 ?? diceRoll(random);
  if (first === second) {
    return 100 + first;
  } else {
    return Math.max(first, second);
  }
}
