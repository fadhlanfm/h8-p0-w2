/**
 *	=========
 *	Minecraft
 * 	=========
 * 	Bantulah steve untuk mengumpulkan berbagai macam mineral yang ada di World 66785.
 *
 * Terdapat 5 jenis mineral di dalam game Minecraft yang direpresentasikan dengan :
 *    Mineral             Harga ($)
 * copper : "c"             20
 * iron   : "i"             30
 * silver : "s"             40
 * diamond: "d"            1000
 * gold   : "g"             80
 *
 *
 * Mineral-mineral ini terpendam di dalam tambang dan dipisahkan oleh tanah yang direpresentasikan dengan #.
 * Bantu Steve mengimplementasikan function mineCraft yang menerima input berupa tambang dalam bentuk string dan akan mengoutput
 * harga dari semua batuan yang ada di tambang tersebut.
 * selain mineral di atas tidak masuk hitungan
 *
 * contoh:
 * 1. input  : #g######s
 *    output : 140 -> 1 gold = 80, 1 silver = 40 maka outputnya 140
 * 2. input: ############
 *    output: Tidak ada mineral sama sekali
 * 3. input: #sdgipc##
 *    output: 1170 
 *
 *
 *
 *
 */

function mineCraft(tambang) {
    var hargaTotal = 0;
    for(i=0;i<tambang.length;i++){
        switch(tambang[i]){
            case 'c':
                hargaTotal = hargaTotal + 20;
                break;
            case 'i':
                hargaTotal = hargaTotal + 30;
                break;
            case 's':
                hargaTotal = hargaTotal + 40;
                break;
            case 'd':
                hargaTotal = hargaTotal + 1000;
                break;
            case 'g':
                hargaTotal = hargaTotal + 80;
                break;
            default:
                hargaTotal = hargaTotal + 0;               
        }
    }
    if (hargaTotal===0){
      return 'Tidak ada mineral sama sekali'
    }else{
      return hargaTotal;
    }
}

console.log(mineCraft('#g####c##s')); //140
console.log(mineCraft('######w###q###')); //Tidak ada mineral sama sekali
console.log(mineCraft('#sdgicp##')); //1170
console.log(mineCraft('')); //Tidak ada mineral sama sekali
