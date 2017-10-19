var cont = 3;

function addPoem(){

  var newPoem = document.createElement('div');
  newPoem.className = "container-fluid espace";
  newPoem.id = cont;
  document.getElementsByTagName('section')[0].appendChild(newPoem);

  var doc = document.getElementById(cont);
  doc.innerHTML = 'Um poema legal';

  cont += 1;
}
