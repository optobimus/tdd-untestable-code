import { describe, test } from "vitest";
import { expect } from "chai";
import { parsePeopleCsvData } from "../src/testable3.mjs";

describe("Testable 3: CSV parsing", () => {
  test("parses person without age", () => {
    const csv = "Loid,Forger,,Male";
    const result = parsePeopleCsvData(csv);
    expect(result).to.deep.equal([
      { firstName: "Loid", lastName: "Forger", gender: "m" },
    ]);
  });

  test("parses person with age", () => {
    const csv = "Anya,Forger,6,Female";
    const result = parsePeopleCsvData(csv);
    expect(result).to.deep.equal([
      { firstName: "Anya", lastName: "Forger", age: 6, gender: "f" },
    ]);
  });

  test("parses multiple rows", () => {
    const csv = `Loid,Forger,,Male
Anya,Forger,6,Female
Yor,Forger,27,Female`;
    const result = parsePeopleCsvData(csv);
    expect(result).to.have.lengthOf(3);
    expect(result[0].firstName).to.equal("Loid");
    expect(result[1].age).to.equal(6);
    expect(result[2].age).to.equal(27);
  });
});
