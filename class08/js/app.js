document.addEventListener("DOMContentLoaded", ()=> {
   setTimeout(() => {
      obtengoContenido(URL)      
   }, 1000);
})

const verDetalle = (id)=> {
   const seleccion = contenidoJSON.find(c => c.id == id)
         localStorage.setItem("detalle", btoa(JSON.stringify(seleccion)))
         location.href = "detail.html"
}