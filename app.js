// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigos() {
    //Capturar el valor del campo de entrada
    const input = document.getElementById("amigo");
    const nombre = input.value;
    //Validar la entrada
    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    //Actualizar el array de amigos
    amigos.push(nombre);

    const listaNombres = document.getElementById("listaAmigos");
    //Crea un nuevo elemento HTML tipo <li> (list item)
    const nuevoNombre = document.createElement("li");
    //Una vez creado el nuevo list item (que por cierto está vacío) para poder mostrar el texto que deseamos (el nuevo nombre agregado) usamos .textContent, que es una propiedad en el Modelo de objetos de documento (DOM), que se utiliza para obtener o establecer el contenido textual de un nodo específico y todos sus descendientes. Devuelve el contenido textual sin procesar de un elemento, incluyendo el texto dentro de cualquier elemento anidado e incluso el texto dentro de las etiquetas <script> y <style>. Incluye espacios en blanco y saltos de línea tal como aparecen en el código HTML de origen.
    nuevoNombre.textContent = nombre;
    //Luego para que aparezca el nuevo nombre dentro del contenedor HTML (la lista ul), usamos .appendChild que agrega un nuevo nodo al final de la lista de un elemento hijo de un elemento padre especificado.
    listaNombres.appendChild(nuevoNombre);
}