window.onload = function(){
    var contador = 0;
    document.getElementById("contadorClics").onclick = function(){
        contador++;
        alert(contador);
    }
}

// window.onload = function() {
//   document.getElementById("pinchable").onclick = muestraMensaje;
// }


function mostrarTweet(){
  var eltweet = document.createElement("section");
  var laFirma = document.createElement("section");
  var articulo = document.getElementById("articulo").value;
  var autor = document.getElementById("nombreAutor").value;
  var crearArticulo=document.createTextNode(articulo);
  var crearAutor=document.createTextNode(autor);
  var section = document.getElementById("tweetStories");
  eltweet.appendChild(crearArticulo);
  laFirma.appendChild(crearAutor);
  section.appendChild(eltweet);
  section.appendChild(laFirma);
  var etiqueta = document.createElement("span");
  etiqueta.value = "De:"
  var usuario = document.createElement("span");
  usuario.innerText = autor.value;

  //console.log(articulo);
  //eltweet.innerHTML=articulo
  //publicando.appendChild("eltweet");
}
