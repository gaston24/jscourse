let cardsAmostrar = ""
let contenidoJSON = []

const URL = `${window.location.origin}/jscourse/class08/js/trailerflix.json`
//const URL = 'http://localhost:3050/trailerflix/'
//const URL = `https://api.algunservidorremoto.com.au/pelis.json`

const contenidoDOM = document.querySelector("#contenido")
const cargandoDOM = document.querySelector("#cargando")