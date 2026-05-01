const {
  sum,
  difference,
  multiplication,
  division,
} = require("./mathOperations");

describe("mathOperations", () => {
  test("sum adds two numbers", () => {
    expect(sum(10, 5)).toBe(15);
  });

  test("difference subtracts second number from first", () => {
    expect(difference(10, 5)).toBe(5);
  });

  test("multiplication multiplies two numbers", () => {
    expect(multiplication(10, 5)).toBe(50);
  });

  test("division divides first number by second", () => {
    expect(division(10, 5)).toBe(2);
  });

  test("division throws error when second number is zero", () => {
    expect(() => division(10, 0)).toThrow("Division by zero is not allowed");
  });
});
