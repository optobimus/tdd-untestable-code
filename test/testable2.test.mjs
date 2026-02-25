import { describe, test } from "vitest";
import { expect } from "chai";
import { diceHandValue } from "../src/testable2.mjs";

describe("Testable 2: dice game", () => {
  test("pair returns 100 + die value", () => {
    expect(diceHandValue(3, 3)).to.equal(103);
    expect(diceHandValue(6, 6)).to.equal(106);
  });

  test("non-pair returns higher die", () => {
    expect(diceHandValue(2, 5)).to.equal(5);
    expect(diceHandValue(6, 1)).to.equal(6);
  });
});
