// Crear un estructura que permita agregar elementos. Al recuperar los elementos devolverá el último agregado. Al devolverlo lo eliminrá de la pila.
// Se añadirán uno a uno con el método push(item)
// Se recuperarán uno a uno con el método pop()

const fruits = ['manzana', 'pera', 'naranja', 'fresa', 'mango', 'melón']

const arrFruits = () => {
    fruits.push('melocotón')
    console.log(fruits)
    
    const popItem = fruits.pop()
    console.log(fruits)
    console.log(popItem)
    return popItem
}

arrFruits()

module.exports = {
    arrFruits
}