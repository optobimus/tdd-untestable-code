import { describe, test } from "vitest";
import { expect } from "chai";
import { daysUntilChristmas } from "../src/testable1.mjs";

describe("Testable 1: days until Christmas", () => {
  test("returns 1 on Christmas Eve", () => {
    const today = new Date(2024, 12 - 1, 24);
    expect(daysUntilChristmas(today)).to.equal(1);
  });

  test("returns 0 on Christmas Day", () => {
    const today = new Date(2024, 12 - 1, 25);
    expect(daysUntilChristmas(today)).to.equal(0);
  });

  test("counts to next year's Christmas after Dec 25", () => {
    const today = new Date(2023, 12 - 1, 26);
    expect(daysUntilChristmas(today)).to.equal(365);
  });
});
