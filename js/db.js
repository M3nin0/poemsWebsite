var cont = 3;

function addPoemArgs(text){
  var newPoem = document.createElement('div');
  newPoem.className = "container-fluid espace";
  newPoem.id = cont;
  document.getElementsByTagName('section')[0].appendChild(newPoem);

  var doc = document.getElementById(cont);
  doc.innerHTML = text;

  cont += 1;
}

function connect(){
  db = openDatabase('poems', '1.0', 'poemsdb', 2 * 1024 * 1024);
}

// Cria tabelas para os poemas
function createTable() {
  db.transaction(function(tx){
    tx.executeSql('CREATE TABLE IF NOT EXISTS poemas (ID INTEGER PRIMARY KEY, poem TEXT )');
  });
}

connect();
createTable();

function salva(){

  var element = 2;
  var texto = document.getElementById(element).innerHTML;
  var sentinel = document.getElementById(element);

  while(sentinel != null){

    db.transaction(function(tx){
      tx.executeSql('INSERT INTO poemas (id, poem) VALUES(?, ?)', [element, texto]);
    });

    element += 1;

    if(document.getElementById(element)!= null){
      texto = document.getElementById(element).innerHTML;
    }

    sentinel = document.getElementById(element);
  }

  recovery();
}

function recovery(){

  db.transaction(function(tx){
    tx.executeSql('SELECT * FROM poemas', [], function(rx, resultado){
      var rows = resultado.rows;
      for(var i = 0; i < rows.length; i++){
        addPoemArgs(rows[i].poem);
      }
    });
  }, null);
}
