let rows3 = 5; // input the number of rows
let output = '';
let batas = 1;
let k = 0;
let batas = 1;


// do loops to display asterisks in the console.
    for(j=0;j<rows3;j++){
        while(k < batas){
            k++;
            output=output + '*';
        }
        console.log(output);
        batas++;
      }