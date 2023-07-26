

function verificar () {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('ano')
    var res = document.getElementById('res')

    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')

    } else {
        var sexo = document.getElementsByName('sexo')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        
        if (sexo[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src','criança-homem.png')
            } else if (idade < 21){
                //Jovem
                img.setAttribute('src','adolescente-homem.png')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src','adulto-homem.png')
            } else {
                //Velho
                img.setAttribute('src','velho-homem.png')
            }
        } else if (sexo[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src','criança-mulher.png')
            } else if (idade < 21){
                //Jovem
                img.setAttribute('src','adolescente-mulher.png')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src','adulto-mulher.png')
            } else {
                //Velho
                img.setAttribute('src','velho-mulher.png')
            }
        }
        res.style.textAlign = 'center'
        img.style.padding = '20px'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos!`
        res.appendChild(img)
    } 
}