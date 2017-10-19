function connect(){
  var db = openDatabase('poems', '1.0', 'poemsdb', 2 * 1024 * 1024);
}
