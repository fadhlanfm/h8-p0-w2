function balikKata(kata) {
    // you can only write your code here!
    var length = kata.length;
    var output = '';
    for(i=0;i<=kata.length;i++){
        if(!output){
            output = kata[length];
        }else{
            output = output + kata[length];
        }
        length--;
    }
    return output;
}

// TEST CASES
console.log(balikKata('Hello World and Coders')); // sredoC dna dlroW olleH
console.log(balikKata('John Doe')); // eoD nhoJ
console.log(balikKata('I am a bookworm')); // mrowkoob a ma I
console.log(balikKata('Coding is my hobby')); // ybboh ym si gnidoC
console.log(balikKata('Super')); // repuS