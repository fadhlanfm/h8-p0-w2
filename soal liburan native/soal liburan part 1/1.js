/*

  TOL JAKARTA BANDUNG

  Karena adanya mudik lebaran maka pemerintah menerapkan sistem beberapa jalur prioritas.
  disini kita diminta oleh pemerintah untuk menentukkan siapa kendaraan yang paling cepat
  sampai ke tujuan.

  Plat nomor 1. KUNING paling cepat sampai, dilanjutkan 2. MERAH, dan terakhir 3. HITAM.
  Jam keberangkatan sesuai urutan dalam array.

  [INPUT]
  [['B 1171 BA', 'merah'], ['B 1172 BA', 'kuning'], ['B 1173 BA', 'hitam'], ['B 1174 BA', 'hitam']]

  [PROCESS]
  kuning => 'B 1172 BA'
  merah => 'B 1171 BA'
  hitam => 'B 1173 BA', 'B 1174 BA'

  [OUTPUT]
  [ 'B 1172 BA', 'B 1171 BA', 'B 1173 BA', 'B 1174 BA' ]  

  NOTE:
  - dibuat sedinamis mungkin
  - tidak boleh pake magic apapun

*/

function firstArrived(cars) {
  // code below here
  var outputKuning = [];
  var outputMerah = [];
  var outputHitam = [];
  var output = [];

  for(i=0;i<cars.length;i++){
    if(cars[i][1]=='kuning'){
      outputKuning[i]=cars[i][0];
    }else if(cars[i][1]=='merah'){
      outputMerah[i]=cars[i][0];
    }else if(cars[i][1]=='hitam'){
      outputHitam[i]=cars[i][0];
    }else{
      return 'input salah';
    }
  }

  output = outputKuning.concat(outputMerah);
  output = output.concat(outputHitam);

  //delete empty element in array
  for(i=output.length-1;i>=0;i--){
    if(!output[i]) {
       output.splice(i, 1);
    }
  }

  return output;
}

//TEST CASE

console.log(firstArrived([['B 1171 BA', 'merah'], ['B 1172 BA', 'kuning'], ['B 1173 BA', 'hitam'], ['B 1174 BA', 'hitam']]));
/*
  [ 'B 1172 BA', 'B 1171 BA', 'B 1173 BA', 'B 1174 BA' ]
*/
console.log(firstArrived([['B 1174 BA', 'hitam'], ['B 1171 BA', 'merah'], ['B 1173 BA', 'hitam'], ['B 1172 BA', 'kuning']]));
/*
  [ 'B 1172 BA', 'B 1171 BA', 'B 1174 BA', 'B 1173 BA' ]
*/
