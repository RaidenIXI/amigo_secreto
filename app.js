let amigos = [];

function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();
    const listaAmigos = document.getElementById("listaAmigos");
    
    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }
    
    amigos.push(nombre);
    
    // Crear un nuevo elemento de lista
    const li = document.createElement("li");
    li.textContent = nombre;
    listaAmigos.appendChild(li);
    
    // Limpiar el campo de entrada
    input.value = "";
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("La lista está vacía. Agrega nombres antes de sortear.");
        return;
    }
    
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSecreto = amigos[indiceAleatorio];
    
    // Mostrar el resultado en la lista de resultado
    const resultadoLista = document.getElementById("resultado");
    resultadoLista.innerHTML = ""; // Limpiar resultados anteriores
    
    const li = document.createElement("li");
    li.textContent = `El amigo secreto es: ${amigoSecreto}`;
    resultadoLista.appendChild(li);
}
