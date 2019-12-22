/*
------------
LOST NUMBERS
------------
PROBLEM
=======
	lostNumbers adalah sebuah function yang akan menerima tiga parameter.
	Tiga parameter tersebut adalah tiga angka yang berbeda.
	Function akan mengembalikan setiap angka diantara angka pada tiga parameter tersebut, dari nilai parameter terkecil ke parameter terbesar
	kecuali angka yang di input pada parameter
Contoh:
	first = 6, second = 1, third = 3
	terbesar adalah 6, terkecil adalah 1,
	maka function mengembalikan urutan angka secara berurutan seperti:
	2, 4, 5

Jika tidak ada angka yang ditampilkan, maka output "Tidak ada angka sama sekali".

RULES
=====
- Wajib menggunakan pseudocode sebelum memulai kode
*/

//Pseudocode
/*
PROCEDURE lostNumbers(first, second, third) //ketiga parameter bertipe integer

	<-- KAMUS LOKAL -->
	outputArray = [] //inisialisasi array kosong untuk di-return di akhir
	input = [first, second, third] //tiga input disusun dalam sebuah array

	//mencari nilai maksimum dan minimum dalam input
	max = findMax(input)
	min = findMin(input)
	
	output = min //nilai ini yang akan diproses secara berulang untuk dimasukkan ke dalam outputArray

	input = sort(input) //array input disort secara ascending

	middleValue = input[1] //setelah disort maka sudah pasti nilai median berada di-index 1 (karena jumlahnya element input statis, yaitu 3)

	length = max - min //menentukan selisih nilai max dan min

	i = 0 //index perulangan

	<-- ALGORITMA -->
	IF length > 2 THEN
		DO WHILE output < max
			DO output = output + 1
			IF output != middleValue AND output != max AND output != min AND output == TRUE THEN
				DO outputArray[i] = output
				i = i + 1
			END IF
		RETURN outputArray
		END WHILE
	ELSE
		RETURN 'Tidak ada angka sama sekali'
	END IF
*/

function lostNumbers(first, second, third) {
	var outputArray = [];
	var input = [first, second, third];

	var max = Math.max.apply(Math, input);
	var min = Math.min.apply(Math, input);
	var output = min;
	
	input.sort(function(a, b){return a - b});
	
	var middleValue = input[1];

	var length = max - min;

  	var i=0;

	if (length > 2){
			while(output < max){
				output++;
				if(output!=middleValue && output!=min && output!=max && output){
					outputArray[i] = output;
          			i++;
				}
			}
		return outputArray;
		}else{
			return ('Tidak ada angka sama sekali');
		}

}

console.log(lostNumbers(1, 3, 5));
// // 2, 4

console.log(lostNumbers(4, 6, 2));
// // 3, 5

console.log(lostNumbers(100, 108, 105));
// // 101, 102, 103, 104, 106, 107

console.log(lostNumbers(6, 5, 3));
// // 4

console.log(lostNumbers(3, 1, 2));
// Tidak ada angka sama sekali

console.log(lostNumbers(1, 1, 1));
// Tidak ada angka sama sekali
