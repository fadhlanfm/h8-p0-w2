/*

  TOL JAKARTA BANDUNG

  Disini kita diminta oleh pemerintah untuk menentukkan siapa kendaraan
  yang paling cepat sampai ke tujuan, berdasarkan laju dan kecepatan sampai di 
  tujuan.

  [INPUT]
  cars = [['B 1171 BA', 100, 200], ['B 1172 BA', 200, 0], ['B 1173 BA', 98, 220], ['B 1174 BA', 80, 400]]
  info: ['PLAT NOMOR', 'SPEED', 'CURRENT POSITION']
  totalKM = 450

  [PROCESS]
  butuh waktu = jarak tersisa / kecepatan
  cars ke - 0 = butuh waktu 2,5 jam
  cars ke - 1 = butuh waktu 2,25 jam
  cars ke - 2 = butuh waktu 2.35 jam
  cars ke - 3 = butuh waktu 0.63 jam

  [OUTPUT]
  [ 'B 1174 BA', 'B 1172 BA', 'B 1173 BA', 'B 1171 BA' ]

  NOTE:
  - dibuat sedinamis mungkin
  - tidak boleh pake magic apapun

*/

function sortByCol(arr, colIndex){
  arr.sort(sortFunction)
  function sortFunction(a, b) {
      a = a[colIndex]
      b = b[colIndex]
      return (a === b) ? 0 : (a < b) ? -1 : 1
  }
}

function winner (cars, totalKM) {
  //code below here
  var butuhWaktu = [];
  for(i=0;i<cars.length;i++){
    butuhWaktu.push([]);
    for(j=0;j<2;j++){
      if(j===0){
        butuhWaktu[i][j] = (totalKM - cars[i][2]) / cars[i][1];
      }else{
        butuhWaktu[i][j] = cars[i][0];
      }
    }
  }
  sortByCol(butuhWaktu, 0);
  for (var i = 0; i < butuhWaktu.length; i++) {
    butuhWaktu[i].splice(0, 1);
  }
  return butuhWaktu;
}

console.log(winner([['B 1171 BA', 100, 200], ['B 1172 BA', 200, 0], ['B 1173 BA', 98, 220], ['B 1174 BA', 80, 400]], 450));
/*
  [ 'B 1174 BA', 'B 1172 BA', 'B 1173 BA', 'B 1171 BA' ]
*/