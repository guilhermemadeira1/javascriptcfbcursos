/* 
for in -> Itera sobre os índices de vetores e valores chave de objetos. Os índices e chaves são tratados como strings */

let nums = [1,2,3]

for(i in nums){
    console.log(i+" "+typeof(i))
}

/*Saída: 0 string
         1 string
         2 string

for of -> Itera sobre os elementos de coleções.*/

let nums = [1,2,3]

for(n of nums){
    console.log(n+""+typeof(n));
}
/*
Saída: 1 number
       2 number
       3 number
*/