function diceRoll() {
  const min = 1;
  const max = 6;
  // Why hard to test: Math.random() makes outcomes non-deterministic
  return Math.floor(Math.random() * (max + 1 - min) + min);
}

export function diceHandValue() {
  // Hard to test: result depend on random dice rolls
  const die1 = diceRoll();
  const die2 = diceRoll();
  if (die1 === die2) {
    // one pair
    return 100 + die1;
  } else {
    // high die
    return Math.max(die1, die2);
  }
}
