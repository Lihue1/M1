'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
 let suma = 0
 for(let i = 0;i<num.length;i++){
   suma+= +num[i]*2**(num.length-1-i);
 }
 return suma;
}

function DecimalABinario(num) {
  // tu codigo aca
let decimal = num;
let binario = (decimal%2).toString();
for(;decimal>1;){
  decimal=parseInt(decimal/2);
  binario = (decimal%2)+(binario);
}
return binario;
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}