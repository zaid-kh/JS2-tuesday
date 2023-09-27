function findSmallest(a, b, c) {
  if (c < b && c < a) {
    // comparisons are evaluated to true/false and those in turn are evaluated to 1/0 when compared with the 3rd number
    return c;
  } else if (a < c && a < b) {
    return a;
  } else {
    return b;
  }
}
console.log(findSmallest(52, 66, 2)); // ReferenceError: findSmalest is not defined
