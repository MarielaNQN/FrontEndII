function renderizarDatosUsuario() {
// Aquí realizamos un la consulta de la promesa, esperando su respuesta asíncrona
fetch('https://randomuser.me/api/')
    .then(response => {
        return response.json()
    })
    .then(data => {
        //manipulamos la respuesta
    /* -------------------------------- CONSIGNA 1 -------------------------------- */
    // Aquí deben desarrollar una función que muestre en pantalla:
    // la foto, el nombre completo del usuario y su email.
    // Esto debe estar basado en la info que nos llega desde la API e insertarse en el HTML.
    let tarjeta = document.querySelector(".tarjeta");
    tarjeta.innerHTML = `<h3>${data.results[0].name.first} ${data.results[0].name.last} <br> ${data.results[0].email} </h3>`;
    let img = document.createElement('img');
    img.setAttribute('src', `${data.results[0].picture.large}`)
    tarjeta.appendChild(img);
    });
}
    /* --------------------------- CONSIGNA 2 (extra) --------------------------- */
    // Aqui pueden ir por el punto extra de utilizar el boton que se encuentra comentado en el HTML
    // Pueden descomentar el código del index.html y usar ese boton para ejecutar un nuevo pedido a la API, sin necesidad de recargar la página.
    // Es criterio del equipo QUÉ bloque del código debe contenerse dentro de una función para poder ser ejecutada cada vez que se escuche un click.
    let button = document.querySelector('#random');
    button.addEventListener('click', renderizarDatosUsuario)