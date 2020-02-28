function xo(str) {
    // you can only write your code here!
    var xCounter = 0;
    var oCounter = 0;
    for(i=0;i<str.length;i++){
        if(str[i]==='x'){
            xCounter++;
        }else if(str[i]==='o'){
            oCounter++;
        }else{
            return 'error, please check your input';
        }
    }

    if(xCounter===oCounter){
        return true;
    }else{
        return false;
    }
}

// TEST CASES
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true