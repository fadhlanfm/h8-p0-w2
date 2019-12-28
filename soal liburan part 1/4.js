/*
GET COORDINATES
=======================

fungsi getCoordinates adalah sebuah fungsi untuk mendapatkan koordinat
dari setiap titik "x". Output yang dikembalikan pada fungsi ini adalah
sebuah array dengan koordinat dengan format "<huruf><angka>" pada board.

EXAMPLE:
var array = [
  [" ", "A", "B", "C"],
  ["1", " ", "x", " "],
  ["2", " ", " ", " "],
  ["3", "x", " ", " "],
]
console.log(getCoordinates(array))
// ["B1", "A3"]
*/
function konversiJ(j){
  switch(j){
    case 1:
      return 'A';
      break;
    case 2:
      return 'B';
      break;
    case 3:
      return 'C';
      break;
    case 4:
      return 'D';
      break;
    case 5:
      return 'E';
      break;
    case 6:
      return 'F';
      break;    
    case 7:
      return 'G';
      break;
    case 8:
      return 'H';
      break;
    case 9:
      return 'I';
      break;
    case 10:
      return 'J';
      break;
    case 11:
      return 'K';
      break;
    case 12:
      return 'L';
      break;
    case 13:
      return 'M';
      break;
    case 14:
      return 'N';
      break;
    case 15:
      return 'O';
      break;
    case 16:
      return 'P';
      break;
    case 17:
      return 'Q';
      break;
    case 18:
      return 'R';
      break;
    case 19:
      return 'S';
      break;
    case 20:
      return 'T';
      break;
    case 21:
      return 'U';
      break;
    case 22:
      return 'V';
      break;
    case 23:
      return 'W';
      break;
    case 24:
      return 'X';
      break;
    case 25:
      return 'Y';
      break;
    case 26:
      return 'Z';
      break;
    default:
      return 'error';
  }
}

function getCoordinates(arr) {
  // code below here
  var jumlahKolom = arr[0].length;
  var jumlahBaris = arr.length;
  var output = [];
  var indexOutput = 0;

  for(i=1;i<jumlahBaris;i++){
    for(j=1;j<jumlahKolom;j++){
      
      if(arr[i][j]=='x'){
        output[indexOutput]= konversiJ(j) +''+ i;
        indexOutput++;
      }
    }
  }
  return output;
}

var array = [
  [" ", "A", "B", "C", "D"],
  ["1", " ", " ", "x", " "],
  ["2", " ", "x", " ", " "],
  ["3", " ", " ", " ", "x"],
  ["4", " ", " ", "x", " "],
]
console.log(getCoordinates(array))
// [ 'C1', 'B2', 'D3', 'C4' ]

var array2 = [
  [" ", "A", "B", "C"],
  ["1", "x", " ", "x"],
  ["2", " ", "x", " "],
  ["3", "x", " ", "x"],
]
console.log(getCoordinates(array2))
// [ 'A1', 'C1', 'B2', 'A3', 'C3' ]