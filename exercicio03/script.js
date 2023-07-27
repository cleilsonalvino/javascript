function contar () {
    var inicio = document.getElementById('inicio')
    var fim = document.getElementById('fim')
    var passo = document.getElementById('passo')
    var res = document.getElementById('res')
    

    if (inicio.value.length == 0) {
        res.innerHTML = 'Contagem inválida!'
    } else if (passo.value.length == 0 ) {
        alert('Passo inválido! Considerando PASSO 1')
    } else if (fim.value.length == 0){
        alert('Contagem inválida!')
    } else {
        for (inicio; )
    }
}