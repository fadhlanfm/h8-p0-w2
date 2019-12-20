/*
 BUATLAH KODE FUNCTION DISINI
*/

function processSentence(name,age,address,hobby){
    var sentence = 'Nama saya ' +name+ ', umur saya ' +age+ ' tahun, alamat saya di ' +address+ ', dan saya punya hobby yaitu ' +hobby+ '!';
    return sentence;
}

var name = "Agus";
var age = 30;
var address = "Jln. Malioboro, Yogjakarta";
var hobby = "gaming";

var fullSentence = processSentence(name,age,address,hobby);
console.log(fullSentence); // Menampilkan "Nama saya Agus, umur saya 30 tahun, alamat saya di Jln. Malioboro, Yogjakarta, dan saya punya hobby yaitu gaming!"