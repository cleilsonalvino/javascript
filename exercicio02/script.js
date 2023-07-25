function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    var img = document.getElementById('res')

    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        
        

        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade <= 10) {
                // criança
                res.src = 'criança-homem.png'
            } else if (idade < 21) {
                // Adolescente
                img.src = 'adolescente-homem.png'
            } else if (idade < 50) {
                // Adulto
                img.src = 'adulto-homem.png'
            } else {
                // Idoso
                img.src = 'velho-homem.png'
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade <= 10) {
                // criança
                img.src = 'criança-mulher.png'
            } else if (idade < 21) {
                // Adolescente
                img.src = 'adolescente-mulher.png'
            } else if (idade < 50) {
                // Adulto
                img.src = 'adulto-mulher.png'
            } else {
                // Idoso
                img.src = 'velho-mulher.png'
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        img.appendChild(img)
    }
}