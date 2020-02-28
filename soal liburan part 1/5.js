/*
  PALINDROME CHANGER

  Palindrome changer adalah sebuah fungsi untuk mengubah semua isi
  array of numbers menjadi angka palindrome. Palindrome adalah sebuah kata atau angka
  yang sama nilainya ketika dibalik.

  EXAMPLE:
  console.log(palindromeChanger([102, 12, 47]))
  // [ 111, 22, 55]
*/

/*
function fastestIsPalindrome(str) {
  var len = Math.floor(str.length / 2);
  for (var i = 0; i < len; i++){
    if (str[i] !== str[str.length - i - 1]){
      return false;
    }
  }
  return true;
}
*/

function palindrome(num){
  let isPalindrome = false

  while (!isPalindrome){
    let stringNum = num.toString();
    let numDibalik = '';

    for (let i = stringNum.length-1; i >=0 ; i--) {
       numDibalik += stringNum[i]
    }

    if(numDibalik == num){
      isPalindrome = true;
      return num;
    }else{
      isPalindrome = false;
      num++
    }
  }
}

function palindromeChanger(numbers){
  let result = [];
  for(i=0;i<numbers.length;i++){
    let pal = palindrome(numbers[i])
    result.push(pal);
  }
  return result;
}

// function palindromeChanger(numbers) {
//   // code below here
//   var output = [];

//   for(i=0;i<numbers.length;i++){
//     var numberString = numbers[i].toString();
//     if(numberString.length==1){
//       var numberInt = parseInt(numberString);
//       output[i]=numberInt;
//     }
//     else{
//         while(!fastestIsPalindrome(numberString)){
//           var numberInt = parseInt(numberString);
//           numberInt = numberInt + 1;
//           numberString = numberInt.toString();
//         }
//         output[i]=numberInt;
//     }
//   }
//   return output;
// }

console.log(palindromeChanger([117, 9, 20, 30, 42]))
// [ 121, 9, 22, 33, 44]