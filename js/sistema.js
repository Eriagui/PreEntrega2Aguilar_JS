// Clase para llevar la logica de nuestro sistema de stock
class Sistema {
    constructor() {
        this.productos = [
            new Producto('BANANA', 1234, 0),
            new Producto('MANZANA', 2345, 25),
            new Producto('NARANAJA', 321, 32),
            new Producto('MANDARINA', 3256, 4),
            new Producto("PERA", 5000, 0)
        ]
        this.usuarios_registrados = [
            'PEPE',
            'MARIA',
            'MESSI'
        ]

        this.logueado = false
    }

    enlistar() {
        let lista = ''
        // Podemos iterar sobre el array y tener un contador a la vez
        // si a la arrow fn del forEach le pasamos dos param
        this.productos.forEach((producto, num) => {
            lista += num + ")" + this.productos[num].nombre + " "
        })
        return Number(prompt("¿De cual de los siguientes productos desea verificar existencias? \n", lista))
    }

    verificar_stock(num) {
        alert("El producto " + this.productos[num].nombre + " tiene una existencia de " + this.productos[num].stock + " unidades")
        // El usuario nos va a dar el numero del producto del que quiere revisar stock
        // Nosotros tenemos que acceder a ese producto y mostrar sus prop

    }

    ordenar(num) {
        switch (num) {
            case 0:
                this.productos.sort((a, b) => {
                    if (a.nombre < b.nombre) return -1
                    if (a.nombre > b.nombre) return 1
                    return 0
                })
                break;

            case 1:
                this.productos.sort((a, b) => a.precio - b.precio)
                break;

            case 2:
                this.productos.sort((a, b) => b.precio - a.precio)

        }
    }

    sin_stock() {
        let lista = ""
        let productos_sin_stock = this.productos.filter((elm) => elm.stock == 0)
        console.log(productos_sin_stock)
        productos_sin_stock.forEach((producto, num) => {
            lista += productos_sin_stock[num].nombre + " "
        })
        alert(lista)
    }

    encontrar_producto(nombre){
        let encontrado = false
        this.productos.forEach((producto, num) => {
            if (this.productos[num].nombre == nombre) {
                encontrado = true 
            }
        })
        console.log(encontrado)
        return encontrado
    }
}