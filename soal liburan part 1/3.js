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

function mostCarsByState (cars) {
  //code below here
  var output = [];
  var uniqueCars = cars.reduce(function(a,b){if(a.indexOf(b)<0)a.push(b);return a;},[]);
  
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
*/g