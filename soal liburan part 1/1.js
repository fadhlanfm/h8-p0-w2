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

  /*
  for(i=0;i<cars.length;i++){
    if(cars[i][1]=='kuning'){
      output[i]=cars[i][0];
    }
  }

  var j = i;
  for(i=0;i<cars.length;i++){
    if(cars[i][1]=='merah'){
      j++;
      output[j]=cars[i][0];
    }
  }

  var k = j;
  for(i=0;i<cars.length;i++){
    if(cars[i][1]=='hitam'){
      k++;
      output[k]=cars[i][0];
    }
  }
  */

  for(i=0;i<cars.length;i++){
    if(cars[i][1]=='kuning'){
      outputKuning[i]=cars[i][0];
    }
  }

  for(i=0;i<cars.length;i++){
    if(cars[i][1]=='merah'){
      outputMerah[i]=cars[i][0];
    }
  }

  for(i=0;i<cars.length;i++){
    if(cars[i][1]=='hitam'){
      outputHitam[i]=cars[i][0];
    }
  }

  //output = outputKuning.concat(outputMerah);
  //output = output.concat(outputHitam);

  
  for(i=0;i<outputKuning.length;i++){
    if(outputKuning[i]){
      output[i]=outputKuning[i];
    }
  }

  var j = i;
  for(i=0;i<outputMerah.length;i++){
    if(outputMerah[i]!=null){
      j++;
      output[j]=outputMerah[i];
    }
  }

  var k = j;
  for(i=0;i<outputHitam.length;i++){
    if(outputHitam[i]!=null){
      k++;
      output[k]=outputHitam[i];
    }
  }
  

  //delete empty element in array
  /*
  for(i=output.length-1;i>=0;i--){
    if(!output[i]) {
       output.splice(i, 1);
    }
  }
  */
 var cleanOutput = [];
  for (var i = 0; i < output.length; i++) {
    if (output[i]) {
      cleanOutput.push(output[i]);
    }
  }

  return cleanOutput;
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
