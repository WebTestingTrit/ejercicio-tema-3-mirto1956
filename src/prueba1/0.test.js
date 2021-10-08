const { addFruit, getFruit, listFruit } = require('./Pure');

const newFruit = ['melocotón'];
const sizeBefore = listFruit().length;

addFruit(newFruit);
const sizeAfter = listFruit().length;
let actual = sizeAfter;
let expected = sizeBefore + 1;

console.group(`Añade fruta`);
if (actual === expected) {
  console.log(`✅ Passed`);
} else {
  console.error(`❌ Failed: Expected: ${expected} but got ${actual}`);
}
console.groupEnd();

const pickFruit = getFruit();

const sizeAfterPick = listFruit().length;

console.group(`pop fruta`);
if (pickFruit === newFruit) {
  console.log(`✅ Passed`);
} else {
  console.error(`❌ Failed`);
}
console.groupEnd();

console.group(`no fruta`);
if (sizeAfterPick === sizeBefore) {
  console.log(`✅ Passed`);
} else {
  console.error(`❌ Failed`);
}
console.groupEnd();
