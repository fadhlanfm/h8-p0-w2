/*
 BUATLAH KODE FUNCTION DISINI
*/

function processSentence(name,age,address,hobby){
    let sentence = 'Nama saya ' +name+ ', umur saya ' +age+ ' tahun, alamat saya di ' +address+ ', dan saya punya hobby yaitu ' +hobby+ '!';
    return sentence;
}

let name = "Agus";
let age = 30;
let address = "Jln. Malioboro, Yogjakarta";
let hobby = "gaming";

let fullSentence = processSentence(name,age,address,hobby);
console.log(fullSentence); // Menampilkan "Nama saya Agus, umur saya 30 tahun, alamat saya di Jln. Malioboro, Yogjakarta, dan saya punya hobby yaitu gaming!"