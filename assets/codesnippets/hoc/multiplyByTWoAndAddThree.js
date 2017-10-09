const multiplyByTwo = x => 2 * x;

const addThree = childFunction =>
  y => childFunction(y) + 3;

const addThree = function(childFunction) {
  return function(y) {
    return childFunction(y) + 3
  }
}

const multipleByTwoAndAddThree = addThree(multipleByTwo)

multipleByTwoAndAddThree(4); // 11
