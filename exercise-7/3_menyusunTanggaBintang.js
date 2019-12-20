var rows3 = 5; // input the number of rows
var output = '';
var batas = 1;
var k = 0;
var batas = 1;


// do loops to display asterisks in the console.
    for(j=0;j<rows3;j++){
        while(k < batas){
            k++;
            output=output + '*';
        }
        console.log(output);
        batas++;
      }