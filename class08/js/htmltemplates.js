const retornoCardContenido = (contenido)=> {
   const {poster, titulo, id, genero, temporadas} = contenido
      let HTMLCard = ""
         HTMLCard += `<div class="col s12 m6 l3">
                        <div class="card z-depth-2">
                           <div class="card-image">
                              <img loading="lazy" src="${poster}" title="${titulo}">
                              <a class="btn-floating halfway-fab waves-effect waves-black red"><i  class="material-icons" onclick="verDetalle(${id})">search</i></a>
                           </div>
                           <div class="card-content black">
                              <p class="yellow-text">GÉNERO: <span class="white-text">${genero}</span></p>
                              <p class="yellow-text">TEMPORADAS: <span class="white-text">${temporadas}</span></p>
                           </div>
                        </div>
                     </div>`
      return HTMLCard
}

const retornoCardError = ()=> {
   let HTMLCardError = `<div class="center white-text"> 
                           <br><br> 
                           <br><br> 
                           <h4>El contenido parece no estar disponible. Intente nuevamente en unos minutos.</h4> 
                           <br><br> 
                           <i class="large material-icons">sentiment_very_dissatisfied</i> 
                           <br><br> 
                        </div>`
      return HTMLCardError
}

const retornoDetalle = (contenido)=> {
      const {poster, titulo, categoria, genero, resumen, temporadas, reparto} = contenido
      HTMLDetalle = `<div class="row center">
                        <div class="col s12 m5 l4 center-align">
                           <img src="${poster}" width="100%">
                        </div>
                        <div class="col s12 m7 l8">
                           <table>
                              <tbody class="white-text">
                                 <tr>
                                 <td class="yellow-text">TÍTULO</td>
                                 <td><h5>${titulo}</h5></td>
                                 </tr>
                                 <tr>
                                 <td class="yellow-text">CATEGORÍA</td>
                                 <td>${categoria}</td>
                                 </tr>
                                 <tr>
                                 <td class="yellow-text">GÉNERO</td>
                                 <td>${genero}</td>
                                 </tr>
                                 <tr>
                                 <td class="yellow-text">RESUMEN</td>
                                 <td>${resumen}</td>
                                 </tr>
                                 <tr>
                                 <td class="yellow-text">TEMPORADAS</td>
                                 <td>${temporadas}</td>
                                 </tr>
                                 <tr>
                                 <td class="yellow-text">REPARTO</td>
                                 <td><h6>${reparto}</h6></td>
                                 </tr>
                              </tbody>
                           </table>
                        </div>
                  </div>`
      return HTMLDetalle
}

const retornoTrailer = (trailerURL)=> {
   let HTMLtrailer = `<div class="video-container">
                        <iframe width="560" height="315" src="${trailerURL}" frameborder="0" encrypted-media; allowfullscreen></iframe>
                     </div>`
      return HTMLtrailer
}