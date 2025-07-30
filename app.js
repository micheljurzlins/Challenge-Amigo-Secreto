// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
    //Capturar el valor del campo de entrada
    const input = document.getElementById("amigo");
    const nombre = input.value;

    //Validar la entrada
    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    //Asegurarse de que no haya duplicados
    if (amigos.includes(nombre)) {
        alert("Ese nombre ya está en la lista.");
        return;
    }

    //Actualizar el array de amigos
    amigos.push(nombre);

    //Agregar elementos a la lista
    mostrarAmigos();

    // Limpiar el campo de entrada
    input.value = "";
}

//Obtener el elemento de la lista
function mostrarAmigos(){
    //Obtener el elemento para seleccionar la lista donde se mostrarán los amigos.
    const lista = document.getElementById("listaAmigos");

    //Limpiar la lista existente
    lista.innerHTML = "";

    //Iterar sobre el arreglo
    for (let i = 0; i < amigos.length; i++) {
        lista.innerHTML += `<li>${amigos[i]}</li>`
    }
}

function sortearAmigo() {
    //Validar que haya amigos disponibles
    if (amigos.length === 0) {
        alert("No hay nombres en la lista para sortear.");
        return;
    }

    //Generar un índice aleatorio
    //Escala ese número al tamaño de tu arreglo.
    const indice = Math.floor(Math.random() * amigos.length);
    //Obtener el nombre sorteado
    const nombreSorteado = amigos[indice];

    //Mostrar el resultado
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>El amigo secreto es: <strong>${nombreSorteado}</strong></li>`;
}
