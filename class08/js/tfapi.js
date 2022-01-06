const obtengoContenido = (URL)=> {
      const xhr = new XMLHttpRequest()
            xhr.open("GET", URL, true) //3er parametro es si es sync o async
            xhr.timeout = 5000 //podemos configurarlo, o dejarlo en 0 para que no limite
            xhr.send()
            xhr.addEventListener("load", ()=> {
               console.log(xhr.readyState)
               if (xhr.readyState == 4 && xhr.status == 200) {
                  contenidoJSON = JSON.parse(xhr.response)// console.table(contenidoJSON)
                  contenidoJSON.forEach(contenido => {
                     cardsAmostrar += retornoCardContenido(contenido)
                  })
                  contenidoDOM.innerHTML = cardsAmostrar
               }
            })
            xhr.addEventListener("error", (error)=> {
               contenidoDOM.innerHTML = retornoCardError()
               xhr.abort()
            })
            cargandoDOM.innerHTML = ""
}