const nama = [
    'Abigail', 'Alexandra', 'Alison',
    'Amanda', 'Angela', 'Bella',
    'Carol', 'Caroline', 'Carolyn',
    'Deirdre', 'Diana', 'Elizabeth',
    'Ella', 'Faith', 'Olivia', 'Penelope'
]

function callback(result) {
  console.log(result);
}

function searchName(string, total, myCallBack) {
  let newString = new RegExp(string, 'gi'); //matching string //global insensitive
  let total_name_found = 0;
  let result = [];

  for (let i = 0; i < nama.length; i++) {
    if (total_name_found < total) { //cek batas maks yg dicari
      if (nama[i].match(newString)) { //cek nama apakah sesuai dengan yg dicari
        result.push(nama[i]) //push nama ke array result
        total_name_found++;
      }
    }
  }
  myCallBack(result);
}

searchName("an",3, callback);
