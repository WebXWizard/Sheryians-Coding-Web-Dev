function sum(a, b) {
  return a + b;
}

function difference(a, b) {
  return a - b;
}

function multiplication(a, b) {
  return a * b;
}

function division(a, b) {
  if (b === 0) {
    throw new Error("Division by zero is not allowed");
  }
  return a / b;
}

module.exports = {
  sum,
  difference,
  multiplication,
  division,
};
