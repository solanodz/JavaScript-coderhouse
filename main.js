
alert('Bienvenido!\nHoy es ' + new Date().toLocaleDateString());
// Crear nombre de usuario y contraseña.
function autenticarUsuario() {
    let user = prompt('Cree su nombre de usuario:');
    let password = prompt('Cree su contraseña:');

    // Ingresar ususario y contraseña.
    let userIngresado = prompt('Ingrese su nombre de usuario:');
    let passwordIngresada = prompt('Ingrese su contraseña:');

    // Verificar si el nombre y contraseña ingresados coinciden con lo creado.
    if (userIngresado === user && passwordIngresada === password) {
        alert('Bienvenido ' + user + '!');
    } else {
        alert('Nombre de usuario o contraseña incorrectos. Intenta de nuevo.');
    }
}
autenticarUsuario();

// Seleccionar la operacion a realizar
let opcion = '';
while (opcion !== '0') {
    opcion = prompt('Ingrese una opcion (escribir solo el numero): \n1- Operaciones basicas \n2- Numeros pares \n3- Numeros impares \n4- Calcular IVA \n5- Peso a dolar \n6- Tirar el dado \n7- Calculadora de IMC\n8- Calcular la raiz cuadrada de un numero\n0- Salir');
    switch (opcion) {
        // Calculadora basica.
        case '1':
            let num1 = parseFloat(prompt('Ingresa el primer numero: '));
            let num2 = parseFloat(prompt('Ingresa el segundo numero: '));
            // Suma
            function sumar(num1, num2) {
                return num1 + num2;
            }
            // Resta
            function restar(num1, num2) {
                return num1 - num2;
            }
            // Multiplicacion
            function multiplicar(num1, num2) {
                return num1 * num2;
            }
            // Division
            function dividir(num1, num2) {
                if (num2 !== 0) {
                    return num1 / num2;
                } else {
                    return 'Error: No se puede dividir por cero';
                }
            }
            // Resultados
            console.log('Suma:', sumar(num1, num2));
            console.log('Resta:', restar(num1, num2));
            console.log('Multiplicación:', multiplicar(num1, num2));
            console.log('División:', dividir(num1, num2));
            break;

        // Devuelve numeros pares hasta un determinado numero y dice la cantidad de numeros pares.
        case '2':
            function numerosPares(limite) {
                let numerosPares = [];
                for (let i = 2; i <= limite; i += 2) {
                    numerosPares.push(i);
                }
                return numerosPares;
            }
            // Resultados
            const limiteSuperior = prompt('Establece un número limite: ');
            const paresHastaLimite = numerosPares(limiteSuperior);
            console.log('Números pares hasta el número ', limiteSuperior + ':');
            console.log(paresHastaLimite);
            break;

        // Devuelve numeros impares hasta un determinado numero y dice la cantidad de numeros impares.
        case '3':
            function numerosImpares(limite) {
                let numerosImpares = [];
                for (let i = 1; i <= limite; i += 2) {
                    numerosImpares.push(i);
                }
                return numerosImpares;
            }
            // Resultados
            const limiteSuperiorImp = prompt('Establece un número limite: ');
            const imparesHastaLimite = numerosImpares(limiteSuperiorImp);
            console.log('Números impares hasta el número ', limiteSuperiorImp + ':');
            console.log(imparesHastaLimite);
            break;

        // Calcular el IVA de un producto.
        case '4':
            function calcularIva(precio) {
                const iva = precio * .21;
                console.log('El IVA de $' + precio + ' es $' + iva);
            }
            let valorProducto = parseFloat(prompt('Ingresa el valor de tu producto en pesos.'))
            calcularIva(valorProducto);
            break;

        // Conversor de moneda. De peso a dolar blue.
        case '5':
            function pesoDolar(cantidad) {
                let dolares = cantidad / 485;
                console.log('AR$' + cantidad + ' son: U$D' + dolares);
            }
            let cantidadPesos = parseInt(prompt('Ingresa la cantidad de pesos que quieres convertir a dolar blue.'));
            pesoDolar(cantidadPesos);
            break;

        // Funcion que da un numero aleatorio entre 1 y 6 como un dado.
        case '6':
            function lanzarDado() {
                var numeroAleatorio = Math.random() * 5 + 1;
                var resultado = Math.round(numeroAleatorio);
                return resultado;
            }
            var resultadoLanzamiento = lanzarDado();
            console.log('El resultado del dado es: ' + resultadoLanzamiento);
            break;

        // CALCULADORA DE IMC
        case '7':
            let persona = {
                nombre: '',
                peso: 0,
                altura: 0,
                calcularIMC: function () {
                    var imc = this.peso / (this.altura * this.altura);
                    return imc;
                }
            };
            persona.nombre = prompt('Ingresa tu nombre:');
            persona.peso = parseFloat(prompt('Ingresa tu peso en kg:'));
            persona.altura = parseFloat(prompt('Ingresa tu altura en metros:'));
            let imc = persona.calcularIMC();
            alert(persona.nombre + ', tu Indice de Masa Corporal es de: ' + imc);
            break;

        // Calcular la raiz cuadrada de un numero
        case '8':
            let numero = parseFloat(prompt('Ingresa el numero al que le quieres sacar la raiz cuadrada: '));
            let raizCuadrada = Math.sqrt(numero);
            alert(`La raiz cuadrada de ${numero} es ${raizCuadrada.toFixed(2)}.`)
            break;

        case '0':
            break;

        default:
            alert('Ingresa un numero valido.');
    };
}
