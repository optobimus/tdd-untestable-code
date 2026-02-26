import { beforeEach, describe, test } from "vitest";
import { expect } from "chai";
import argon2 from "@node-rs/argon2";
import { PasswordService } from "../src/testable4.mjs";

function createFakeUserDao() {
  const store = new Map();
  return {
    async getById(userId) {
      return store.get(userId) ?? null;
    },
    async save(user) {
      store.set(user.userId, { ...user });
    },
  };
}

describe("Testable 4: PasswordService (unit tests with fake)", () => {
  let service;
  let fakeUsers;

  beforeEach(() => {
    fakeUsers = createFakeUserDao();
    service = new PasswordService(fakeUsers);
  });

  test("changePassword succeeds with correct old password", async () => {
    const hash = argon2.hashSync("oldPass");
    await fakeUsers.save({ userId: 1, passwordHash: hash });

    await service.changePassword(1, "oldPass", "newPass");

    const user = await fakeUsers.getById(1);
    expect(argon2.verifySync(user.passwordHash, "newPass")).to.be.true;
  });

  test("changePassword throws when old password is wrong", async () => {
    const hash = argon2.hashSync("oldPass");
    await fakeUsers.save({ userId: 1, passwordHash: hash });

    let threw = false;
    try {
      await service.changePassword(1, "wrongPass", "newPass");
    } catch (e) {
      threw = true;
      expect(e.message).to.equal("wrong old password");
    }
    expect(threw).to.be.true;
  });
});
