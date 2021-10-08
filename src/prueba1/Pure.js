// Crear un estructura que permita agregar elementos. Al recuperar los elementos devolverá el último agregado. Al devolverlo lo eliminrá de la pila.
// Se añadirán uno a uno con el método push(item)
// Se recuperarán uno a uno con el método pop()

const fruits = [];

const addFruit = fruta => {
  fruits.push(fruta);
};

const getFruit = () => {
  const popItem = fruits.pop();

  return popItem;
};

const listFruit = () => {
  return fruits;
};

module.exports = {
  addFruit,
  getFruit,
  listFruit
};
