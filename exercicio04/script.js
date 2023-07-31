function gerarTabuada() {
    let num = document.getElementById('numero')
    let tabuada = document.getElementById('tabuada')

    if (num.value.length == 0 ) {
        alert('Por favor, digite um número!')
    } else {
        let n = Number(num.value)
        tabuada.innerHTML = ''
        for ( let c = 1; c <= 10; c++) {
            let item = document.createElement('option')
            item.text = `${n} X ${c} = ${n*c}`
            tabuada.appendChild(item)
        }

    }


}