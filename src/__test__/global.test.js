const text = "Hi World!";
const fruits = ["manzana", "melon", "banana"];

test("It should have a text", () => {
  expect(text).toMatch(/Hi World!/);
});

test("An array contains a banana", () => {
  expect(fruits).toContain("manzana");
});

test("A value is greater than", () => {
  expect(1).toBeGreaterThan(0);
});

test("Truthy", () => {
  expect(true).toBeTruthy();
});

const reverseString = (str, callback) => {
  callback(str.split("").reverse().join(""));
};

test("Testing a callback", () => {
  reverseString("hello", (str) => {
    expect(str).toBe("olleh");
  });
});

const reverseStringTwo = (str) => {
  return new Promise((resolve, reject) => {
    if (!str) {
      reject(Error("error"));
    }
    resolve(str.split("").reverse().join(""));
  });
};

test("testing a promise", () => {
  return reverseStringTwo("Hello").then((string) => {
    expect(string).toBe("olleH");
  });
});
