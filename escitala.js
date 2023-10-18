const numColumnas = 7;

const inputText = document.getElementById("inputText");
const cifrarButton = document.getElementById("cifrarButton");
const descifrarButton = document.getElementById("descifrarButton");
const output = document.getElementById("output");

function calcularDimensionesMatriz(texto, numColumnas) {
    // Calcula el número de filas redondeando hacia arriba
    const numFilas = Math.ceil(texto.length / numColumnas);

    // Devuelve un objeto con las dimensiones de la matriz
    return {
        filas: numFilas,
        columnas: numColumnas
    };
}

function llenarMatrizCifrado(texto, dimensiones) {
    const matriz = new Array(dimensiones.filas).fill(null).map(() => new Array(dimensiones.columnas).fill(' '));

    for (let columna = 0; columna < dimensiones.columnas; columna++) {
        for (let fila = 0; fila < dimensiones.filas; fila++) {
            const indice = fila * dimensiones.columnas + columna;
            if (indice < texto.length) {
                matriz[fila][columna] = texto.charAt(indice);
            }
        }
    }

    return matriz;
}

function llenarMatrizDescifrado(texto, dimensiones) {
    const matriz = new Array(dimensiones.filas).fill(null).map(() => new Array(dimensiones.columnas).fill(' '));
    const arreglo = texto.split('');   
    var index = 0;

    for (let columna = 0; columna < dimensiones.columnas; columna++) {
        for (let fila = 0; fila < dimensiones.filas; fila++) {
            matriz[fila][columna] = arreglo[index];
            index ++;
        }
    }

    return matriz;
}

function cifradoEscitala(matriz) {
    let textoCifrado = '';

    for (let columna = 0; columna < matriz[0].length; columna++) {
        for (let fila = 0; fila < matriz.length; fila++) {
            textoCifrado += matriz[fila][columna];
        }
    }

    return textoCifrado;
}

function descifradoEscitala(matriz) {
    let textoCifrado = '';

    for (let fila = 0; fila < matriz.length; fila++) {
        for (let columna = 0; columna < matriz[0].length; columna++) {
            textoCifrado += matriz[fila][columna];
        }
    }

    return textoCifrado;
}

function imprimirMatriz(matriz) {
    for (let fila = 0; fila < matriz.length; fila++) {
        console.log(matriz[fila].join(' '));
    }
}

// Eventos del botón cifrar
cifrarButton.addEventListener("click", function () {
    const texto = inputText.value;
    if (texto) {
        const dimensiones = calcularDimensionesMatriz(texto, numColumnas);
        const matriz = llenarMatrizCifrado(texto, dimensiones);
        const textoCifrado = cifradoEscitala(matriz);
        output.textContent = textoCifrado;
    } else {
        alert("Ingresa un mensaje antes de cifrar.");
    }
});

// Eventos del botón descrifrar
descifrarButton.addEventListener("click", function () {
    const texto = inputText.value;
    if (texto) {
        const dimensiones = calcularDimensionesMatriz(texto, numColumnas);
        const matriz = llenarMatrizDescifrado(texto, dimensiones);
        const textoDescifrado = descifradoEscitala(matriz);
        output.textContent = textoDescifrado;
    } else {
        alert("Ingresa un mensaje antes de descifrar.");
    }
});