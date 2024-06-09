// Donde va a correr el bucle y controlamos las entradas del usuario

let sistema = new Sistema()
let inicio_sesion
let num_producto

while (true) {

    let opc = pedir_num('Bienvenido! \n1. Ingresar al sistema \n2. Verificar stock \n3. Mostrar productos sin stock \n4. Agregar un producto \n0. Salir del sistema', 4)

    // Aqui el usuario tiene la opcion de loguearse o registrarse
    //  -> loguearse es acceder a un usuario existente
    //  -> registrarse es generar un nuevo usuario
    if (opc == 1) {
        let nombre = prompt('Ingrese su nombre de usuario').toUpperCase()

        // Buscamos si el usuario existe en la base de datos del sistema
        if (sistema.usuarios_registrados.includes(nombre)) {
            // Existe, entonces accede al sistema
            acceso("Accedió al sistema")
        } else {
            // No existe, entonces preguntamos si quiere registrase
            if (confirm('Usuario no encontrado.  ¿Desea registrarse?')) {
                // usuario se registra y accede al sistema
                sistema.usuarios_registrados.push(nombre)
                acceso("Ha quedado registrado y ha accedido al sistema")
            }
        }
    }

    // Condicional + confirm para sacar al usuario del bucle
    if (opc == 0) {
        let fin_sesion
        let duracion
        if (confirm('Esta seguro que quiere salir?')) {
            if (sistema.logueado) {
                fin_sesion = new Date()
                duracion = ((fin_sesion - inicio_sesion) / 1000) / 60
                alert("Su sesión duró " + duracion + " minutos")
            }
            break
        }
    }

    // Selecciones para las cuales el usuario necesita primero ingresar al sistema
    if (sistema.logueado) {
        // Verificar stock
        if (opc == 2) {
            // Se pregunta al usuario cómo ordenar la lista
            let orden = pedir_num("Mostrar la lista por: \n0. Orden alfabetico \n1. Precio ascendente \n2. Precio descendente", 2)

            //Antes de mostrar la lista se ordena el arreglo
            sistema.ordenar(orden)
            // Se muestra la lista ordenada de acuerdo con el criterio seleccionado
            num_producto = sistema.enlistar()
            // Se revisa el stock del producto seleccionado
            sistema.verificar_stock(num_producto)
        }

        // Muestra productos sin stock
        if (opc == 3) {
            //Se pregunta al usuario cómo ordenar la lista
            let orden = pedir_num("Mostrar la lista por: \n0. Orden alfabetico \n1. Precio ascendente \n2. Precio descendente", 2)
            //Antes de mostrar la lista se ordena el arreglo
            sistema.ordenar(orden)
            //Se muestran los productos sin stock ordenados de acuerdo con el criterio seleccionado
            sistema.sin_stock()
        }

        // Agrega un producto
        if (opc == 4) {
            let encontrado = false
            let nombre

            //Se pide el nombre del producto a ingresar hasta que sea uno diferente de uno ya existente en la base de datos
            do {
                nombre = prompt("Ingrese el nombre del producto a agregar").toUpperCase()
                encontrado = sistema.encontrar_producto(nombre)
                if (encontrado) {
                    alert("Error! El producto ya exite en la base de datos")
                }
            } while (encontrado)

            let precio = Number(prompt("Ingrese el precio del producto"))
            let stock = Number(prompt("Ingrese el stock del producto"))
            let producto_nuevo = new Producto(nombre, precio, stock)
            sistema.productos.push(producto_nuevo)
            alert("El producto ha sido añadido")
            console.log(sistema.productos)
        }

    } else {
        alert("Para poder continuar, favor de ingresar al sistema")
    }
}

function pedir_num(str, max) {
    let num = Number(prompt(str))

    // Checkeamos que lo ingresado por el usuario sea valido (que sea un entero + no sea NaN + no se pase del max)
    while (!Number.isInteger(num) || isNaN(num) || (num < 0 || num > max)) {
        num = Number(prompt(str))
    }

    return num
}

function acceso(mensaje) {
    sistema.logueado = true
    inicio_sesion = new Date() // Una vez logueado iniciamos Date para calcular el tiempo
    alert(mensaje)
}