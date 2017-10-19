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

  while(texto != null){

    db.transaction(function(tx){
      tx.executeSql('INSERT INTO poemas (id, poem) VALUES(?, ?)', [element, texto]);
    });

    element += 1;
    texto = document.getElementById(element).innerHTML;
  }
}
