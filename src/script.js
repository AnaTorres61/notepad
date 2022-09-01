function adicionarNota(){
  var nota = document.getElementById("nota").value
  listarNotasNaTela(nota)
  document.getElementById("nota").value = ""
}

function listarNotasNaTela(nota){
  var listaNotas = document.querySelector('#listaNotas')
  var elementoNota = "<div id=boxNota><button class=close onclick=close()>X</button><p>" + nota + "</p></div>"
  listaNotas.innerHTML = listaNotas.innerHTML + elementoNota
}

function close(){
  
}