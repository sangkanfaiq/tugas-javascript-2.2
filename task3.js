const seleksiNilai = (nilaiAwal, nilaiAkhir, dataArray) => {
  const hasil = [];

  if(typeof(nilaiAwal) == 'number' && typeof(nilaiAkhir) == 'number') {
    if (nilaiAkhir < nilaiAwal) {
      console.log("Nilai akhir harus lebih besar dari pada nilai awal");
      return false;
    } else if (dataArray.length < 5) {
      console.log("Jumlah angka dalam dataArray harus lebih dari 5");
      return false;
    }
  
    for (let i = 0; i < dataArray.length; i++) {
      if(typeof(dataArray[i]) == 'string') {
        console.log("Nilai data array harus number")
        return false;
      }
      if (dataArray[i] > nilaiAwal && dataArray[i] < nilaiAkhir) {
        hasil.push(dataArray[i]);
      }
    }

    if (hasil.length == 0) {
      console.log("Nilai tidak ditemukan");
      return false;
    }
    hasil.sort(function (a, b) {
      return a - b;
    });
    
    console.log(hasil);

  } else {
    console.log('Nilai harus number')
  }
};

seleksiNilai(5, 20, [2, 25, 4, 14, 17, 30, 8]);
// seleksiNilai(5, 3, [2, 25, 4, 14, 17, 30, 8]);
// seleksiNilai(4, 17, [2, 25, 4]);
// seleksiNilai(5, 17, [2, 25, 4, 1, 30, 18]);
