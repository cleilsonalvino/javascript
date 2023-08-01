let valores = [1,2,3,4,5,6]

//console.log(valores)
/*
console.log(valores[0])
console.log(valores[1])
console.log(valores[2])
console.log(valores[3])
console.log(valores[4])
console.log(valores[5])
*/

/* for(let pos = 0; pos < valores.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${[pos]}`)
}
*/

/* for(let pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
*/ 
let pos = valores.indexOf(2)

if (pos == -1) {
    console.log('O valor não foi encontrado!')
} else {
    console.log(`O valor 2 está na posição ${pos}`)
}