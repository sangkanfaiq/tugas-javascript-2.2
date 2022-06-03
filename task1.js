/**
 * Method bawaan JS
 * 
 * 1. Split()
 * Split digunakan untuk memecah string menjadi array substring
 * Contoh penggunaan :
 *  const nama = "Faiq"
    const pecah = nama.split("")
    console.log(pecah)
*/

/**
 *2. Reverse()
 Reverse digunakan untuk membalikan urutan array, element yg pertama jadi yg terakhir, element terakhir jadi yangg pertama
 Contoh penggunaan : 
    const nama = "Faiq"
    const pecah = nama.split("").reverse()
    console.log(pecah)
 */

/**
 * 3. Join()
 * Join digunakan untuk menggabungkan susunan array menjadi sebuah string dan mengembalikan nilai string
 * Contoh penggunaan : 
 *  const nama = ['Sangkan', 'Faiq', 'Akhsan', 'Musafa']
    const namaLengkap = nama.join(" ")
    console.log(namaLengkap)
 * 
 */

/**
 * 4. Replace()
 * Replace digunakan untuk mengganti sebuah nilai string yang telah ditentukan, kemudian mengganti hasil pencarian tersebut dengan nilai yang kita inginkan
 * Contoh penggunaan :
 *  const city = "Jakarta";
    const editCity = city.replace("Jakarta", "Bandung");
    console.log('Sebelumnya : '+city+'\n'+'Setelahnya : '+editCity)
 */

/**
 * 5. toLowerCase()
 * toLowerCase digunakan untuk mengubah nilai string menjadi huruf kecil semua
 * Contoh penggunaan : 
 *  const nama = 'Sangkan Faiq Akhsan Musafa'
    const kecil = nama.toLowerCase()
    console.log('Sebelumnya : '+nama+'\n'+'Setelahnya : '+kecil)
 */

/**
 * 5. toUpperCase()
 * toLowerCase digunakan untuk mengubah nilai string menjadi huruf besar semua
 * Contoh penggunaan : 
 *  const nama = 'Sangkan Faiq Akhsan Musafa'
    const besar = nama.toUpperCase()
    console.log('Sebelumnya : '+nama+'\n'+'Setelahnya : '+besar)
 */

/**
 * 6. Map()
 * Map digunakan untuk menghasilkan array baru dari hasil masing-masing elemen array yang diaplikasikan pada fungsi map itu sendiri, tanpa merubah array aslinya
 *  const number = [1,2,3,4,5]
    const newNumber = number.map((x)=> {
        return x*5
    })
    console.log('Sebelumnya : '+number+'\n'+'Setelahnya : '+newNumber)
 */

/**
 * 7. toString()
 * toString digunakaan untuk mengubah nilai tipe data menjadi tipe data string
 * Contoh penggunaan : 
 * 
    const number = 15 // tipe data number
    const newNumber = number.toString()
    console.log(newNumber) // menjadi tipe data string
 */

/**
 * 8. length()
 * length digunakaan untuk menghitung jumlah karakter yang ada
 * Contoh penggunaan : 
 *  const nama = 'Faiq' // string 
    const jumlah = nama.length // menghitung jumlah karakter string
    console.log(jumlah)
 */

/**
 * 9. Push()
 * Push digunakan untuk menambah satu atau lebih elemen ke akhir sebuah array
 * COntoh penggunaan
 *  const hewan = ['Kambing', 'Kelinci', 'Kucing', 'Sapi']
    const newHewan = hewan.push('Jerapah')
    console.log(hewan)
 */

/**
 * 10. Pop()
 * Pop digunakan untuk  menghapus elemen terakhir dari suatu array
 * COntoh penggunaan
 *  const hewan = ["Kambing", "Kelinci", "Kucing", "Sapi"];
    const newHewan = hewan.pop();
    console.log(hewan);
 */
