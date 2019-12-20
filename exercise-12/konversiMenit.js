function konversiMenit(menit) {
    // you can only write your code here!
    var digitKiri = Math.floor(menit / 60); 
    var digitKanan = menit % 60;
    digitKanan = (digitKanan < 10) ? '0' + digitKanan.toString() : digitKanan.toString();

    var output = digitKiri + ':' + digitKanan;
    return output;
  }
  
  // TEST CASES
  console.log(konversiMenit(63)); // 1:03
  console.log(konversiMenit(124)); // 2:04
  console.log(konversiMenit(53)); // 0:53
  console.log(konversiMenit(88)); // 1:28
  console.log(konversiMenit(120)); // 2:00