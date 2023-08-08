let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []

function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }    
}


function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() { 
    if(isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option') //criou um option
        item.text = `Valor ${num.value} adicionado!`
        lista.appendChild(item) //adicionou o option no select
        res.innerHTML = '' // limpa o res
    } else {
        alert('Valor inválido ou já encontrado na lista!')
    }
    num.value = '' //deixa a parte que coloca o numero vazia
    num.focus() //faz o cursor picar para adicionar um texto ou numero
}

function finalizar() {
    if (valores.length == 0) {
        alert('Adicione valores para finalizar!')
    } else {
        let total = valores.length // conta os valores adicionados
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for(let pos in valores) {
            soma += valores[pos]
            if (valores[pos] > maior) {
                maior = valores[pos]
            }
            if (valores[pos < menor]) {
                menor = valores[pos]
            }
        }
        media = soma / total
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${total} números cadrastados.</p>`
        res.innerHTML += `<p>O maior número adicionado foi o ${maior}</p>`
        res.innerHTML += `<p>O menor número adicionado foi o ${menor}</p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}</p>`
        res.innerHTML += `<p>A média dos valores digitados é de ${media}</p>`
        
    }
}