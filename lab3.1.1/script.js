"use strict"
 
//Variant 6

function valConverter(pound){
    const kgToPounds = 0.4095;
    return pound*kgToPounds;
}

console.log(` It will be: ${valConverter(10)} kg`);
