// const numbers = [1, 2, 3];
// numbers[10] = 11;

// console.log(numbers);

(() => {
  let x, y;
  try {
    throw new Error();
  } catch (y) {
    (x = 1), (y = 2);
    console.log(y);
  }
  console.log(x);
  console.log(y);
})();

const result = [
  [0, 1],
  [2, 3],
].reduce(
  (acc, cur) => {
    return acc.concat(cur);
  },
  [1, 2]
);

console.log(result);

function factorial(num) {
  if (num === 1) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
}
// debugger;
console.log(factorial(3));
