import scream, { addExclamationPoints } from "../src/index";

test("Testing 'scream' function", () => {

  expect(scream("Hello")).toBe("HELLO");
  expect(scream("Hello world.")).toBe("HELLO WORLD!!!");
  expect(scream("How are you?")).toBe("HOW ARE YOU?!");

});

test("Testing 'addExclamationPoints' function", () => {

  expect(addExclamationPoints("Hey.")).toBe("Hey!!!");
  expect(addExclamationPoints("How old are you?")).toBe("How old are you?!");
  expect(addExclamationPoints("Foo")).toBe("Foo");

});