var cont = 3;

function addPoem(){

  var texto = prompt("Insira o seu poema");

  var newPoem = document.createElement('div');
  newPoem.className = "container-fluid espace";
  newPoem.id = cont;
  document.getElementsByTagName('section')[0].appendChild(newPoem);

  var doc = document.getElementById(cont);
  doc.innerHTML = texto;

  cont += 1;
}

function goGithub(){
  location.href = "http://github.com/M3nin0/poemsWebsite";
}
