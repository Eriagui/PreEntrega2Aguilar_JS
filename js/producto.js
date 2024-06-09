// La clase producto para instanciar objetos tipo Producto
let id = 0
class Producto {
    constructor(nombre, precio, stock = 10) {
        this.nombre = nombre
        this.precio = precio
        this.stock = stock

        this.id = ++id
    }
}