var chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles'
];

function addElementToBeginningOfArray(array, element) {
  return [element, ...array];
}
addElementToBeginningOfArray(chocolateBars, 'hi');

function destructivelyAddElementToBeginningOfArray(array, element) {
  
}

