/*

  TOL JAKARTA BANDUNG

  Disini kita diminta oleh pemerintah untuk menentukkan siapa kendaraan
  menghitung persentase jumlah pemudik kendaraan.

  [INPUT]
  cars = ['B', 'D', 'B', 'B', 'A', 'C', 'D']

  [PROCESS]
  cars plat - B ada 4/7
  cars plat - D ada 2/7
  cars plat - A ada 1/7
  cars plat - C ada 1/7

  [OUTPUT]
  [ 'B',
  42.857142857142854,
  'D',
  28.57142857142857,
  'A',
  14.285714285714285,
  'C',
  14.285714285714285 ]

  NOTE:
  - dibuat sedinamis mungkin
  - tidak boleh pake magic apapun

*/

function removeDuplicate(array) {
  var seen = [];
  var output = [];
  var j = 0;
  for(var i = 0; i < array.length; i++) {
       var hold = array[i];
       if(seen[hold] !== 1) {
             seen[hold] = 1;
             output[j++] = hold;
       }
  }
  return output;
}

function mostCarsByState (cars) {
  //code below here
  var output = [];
  var uniqueCars = removeDuplicate(cars);
  
  for(i=0;i<uniqueCars.length;i++){
    var counter = 0;
    for(j=0;j<cars.length;j++){
      if(uniqueCars[i]==cars[j]){
        counter++;
      }
    }
    output.push([]);
    output[i][0]=uniqueCars[i];
    output[i][1]=counter/cars.length;
  }
  return output;
}

console.log(mostCarsByState(['B', 'D', 'B', 'B', 'A', 'C', 'D']));
/*
  [ 'B',
  42.857142857142854,
  'D',
  28.57142857142857,
  'A',
  14.285714285714285,
  'C',
  14.285714285714285 ]
*/