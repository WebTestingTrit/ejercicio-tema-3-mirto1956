const {arrFruits } = require('./Pure');

console.group(`Decolverá el eliminado`);
if (arrFruits() === 'melocotón') {
  console.log(`✅ Passed`);
} else {
  console.error(`❌ Failed`);
}
console.groupEnd();
