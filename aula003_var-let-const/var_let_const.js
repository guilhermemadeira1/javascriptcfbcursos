//escopo com var, let e const

"use strict"; //não permite uso de variáveis não declaradas

//let v = "OK";
if (true){
  //const v = "OK";
  console.log("bloco1: "+v);
  
  if(true){
    var v = "OK";
    console.log("bloco2: "+v);
  }
}
console.log("bloco3: "+v);
