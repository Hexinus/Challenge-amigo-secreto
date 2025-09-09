// Arreglo para guardar los nombres
let amigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();

    // Validación: campo vacío
    if (nombre === "") {
        alert("Por favor, escribe un nombre válido.");
        return;
    }

    // Evitar duplicados
    if (amigos.includes(nombre)) {
        alert("Ese nombre ya fue agregado.");
        input.value = "";
        return;
    }

    // Agregar al arreglo
    amigos.push(nombre);

    // Mostrar en la lista
    actualizarLista();

    // Limpiar input
    input.value = "";
}

// Función para mostrar los nombres en la lista
function actualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // limpiar antes de actualizar

    amigos.forEach(amigo => {
        const li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

// Función para sortear un amigo al azar
function sortearAmigo() {
    const resultado = document.getElementById("resultado");

    // Validar que haya amigos en la lista
    if (amigos.length === 0) {
        alert("Agrega al menos un nombre antes de sortear.");
        return;
    }

    // Elegir un nombre aleatorio
    const indice = Math.floor(Math.random() * amigos.length);
    const amigoSecreto = amigos[indice];

    // Mostrar resultado
    resultado.innerHTML = `<li>🎉 El amigo secreto es: <strong>${amigoSecreto}</strong></li>`;
}
