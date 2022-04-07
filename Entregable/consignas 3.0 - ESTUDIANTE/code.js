/* --------------------------- NO TOCAR DESDE ACÁ --------------------------- */
let datosPersona = {
  nombre: "",
  edad: 0,
  ciudad: "",
  interesPorJs: "",
};

const listado = [{
    imgUrl: "https://huguidugui.files.wordpress.com/2015/03/html1.png",
    lenguajes: "HTML y CSS",
    bimestre: "1er bimestre",
  },
  {
    imgUrl: "https://jherax.files.wordpress.com/2018/08/javascript_logo.png",
    lenguajes: "Javascript",
    bimestre: "2do bimestre",
  },
  {
    imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png",
    lenguajes: "React JS",
    bimestre: "3er bimestre",
  },
];

const profileBtn = document.querySelector("#completar-perfil");
const materiasBtn = document.querySelector("#obtener-materias");
const verMasBtn = document.querySelector("#ver-mas");
const cambiarTema = document.querySelector('#cambiar-tema');

profileBtn.addEventListener("click", renderizarDatosUsuario);
materiasBtn.addEventListener("click", recorrerListadoYRenderizarTarjetas);
cambiarTema.addEventListener("click", alternarColorTema);
/* --------------------------- NO TOCAR HASTA ACÁ --------------------------- */

function obtenerDatosDelUsuario() {
  /* --------------- PUNTO 1: Escribe tu codigo a partir de aqui --------------- */
  datosPersona.nombre = prompt ("Por favor introduzca su nombre completo")
  const anioNacimiento = parseInt(prompt ("Por favor introduzca su año de nacimiento (con formato YYYY)"))
  const anioActual = 2022
  if (isNaN(anioNacimiento) || anioNacimiento > anioActual) {
    datosPersona.edad = "--"
  } else {
  datosPersona.edad = anioActual-anioNacimiento
  }
  datosPersona.ciudad = prompt ("Por favor introduzca su ciudad")
  interesPorJs = confirm ("¿Le interesa JavaScript?")
  if (interesPorJs) {
    datosPersona.interesPorJs = "Si"
  } else
    datosPersona.interesPorJs = "No"
}

function renderizarDatosUsuario() {
  /* ------------------- NO TOCAR NI ELIMINAR ESTA FUNCION. ------------------- */
  obtenerDatosDelUsuario();
  /* --------------- PUNTO 2: Escribe tu codigo a partir de aqui --------------- */
  document.querySelector("#nombre").innerHTML = datosPersona.nombre
  document.querySelector("#edad").innerHTML = datosPersona.edad
  document.querySelector("#ciudad").innerHTML = datosPersona.ciudad
  document.querySelector("#javascript").innerHTML = datosPersona.interesPorJs
}
function recorrerListadoYRenderizarTarjetas() {
  /* ------------------ PUNTO 3: Escribe tu codigo desde aqui ------------------ */
  
  fila.innerHTML  = ""
  listado.forEach (item => {
    const fila = document.querySelector("#fila")
    let caja = document.createElement("div")
    let imagen = document.createElement("img")
    let lenguajes = document.createElement("p")
    let bimestre = document.createElement("p")

    caja.classList.add("caja")
    lenguajes.classList.add("lenguajes")
    bimestre.classList.add("bimestre")

    fila.appendChild(caja)
    caja.appendChild(imagen)
    caja.appendChild(lenguajes)
    caja.appendChild(bimestre)

    imagen.src=item.imgUrl
    imagen.alt = item.lenguajes
    lenguajes.innerText=item.lenguajes
    bimestre.innerText=item.bimestre
})
}

function alternarColorTema() {
  /* --------------------- PUNTO 4: Escribe tu codigo aqui --------------------- */
  const sitio = document.querySelector("#sitio")
  sitio.classList.toggle("dark")
}

/* --------------------- PUNTO 5: Escribe tu codigo aqui --------------------- */
const sobreMi = document.querySelector("#sobre-mi")
addEventListener("keydown", function(event) {
  if(event.key == "f" || event.key == "F" ) {
  sobreMi.classList.remove("oculto")
  }
})
