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

    // Metodo para enlistar los productos en el sistema
    enlistar() {
        let lista = ''
        let num_productos
        let seleccion
        // Podemos iterar sobre el array y tener un contador a la vez
        // si a la arrow fn del forEach le pasamos dos param
        this.productos.forEach((producto, num) => {
            // En el string lista concatenamos cada producto
            lista += num + ")" + this.productos[num].nombre + " "
            num_productos = num
        })

        // Mientras el usuario no seleccione una opción válida, seguiremos preguntando
        do {
            seleccion = Number(prompt("¿De cual de los siguientes productos desea verificar existencias? \n", lista))
        } while (seleccion < 0 || seleccion > num_productos)

        return seleccion
    }

    // Método para verificar las unidades en stock del producto dado
    verificar_stock(num) {
        alert("El producto " + this.productos[num].nombre + " tiene una existencia de " + this.productos[num].stock + " unidades")
        // El usuario nos va a dar el numero del producto del que quiere revisar stock
        // Nosotros tenemos que acceder a ese producto y mostrar sus prop
    }

    // Método para ordenar los productos de acuerdo a un criterio seleccionado
    ordenar(num) {
        switch (num) {
            // Ordena alfabéticamente
            case 0:
                this.productos.sort((a, b) => {
                    if (a.nombre < b.nombre) return -1
                    if (a.nombre > b.nombre) return 1
                    return 0
                })
                break;
            // Ordena de manera ascendente en función al precio    
            case 1:
                this.productos.sort((a, b) => a.precio - b.precio)
                break;
            // Ordena de manera descendiente en función al precio    
            case 2:
                this.productos.sort((a, b) => b.precio - a.precio)

        }
    }

    // Método para mostrar los productos que ya no cuentan con stock
    sin_stock() {
        let lista = ""
        let productos_sin_stock = this.productos.filter((elm) => elm.stock == 0)
        productos_sin_stock.forEach((producto, num) => {
            lista += productos_sin_stock[num].nombre + " "
        })
        alert(lista)
    }

    // Método para revisar si el producto a ingresarse ya se encuentra en la base de datos
    encontrar_producto(nombre) {
        let encontrado = false
        this.productos.forEach((producto, num) => {
            if (this.productos[num].nombre == nombre) {
                encontrado = true
            }
        })
        return encontrado
    }
}