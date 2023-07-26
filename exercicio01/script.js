function carregar () {
var tempo = new Date()
var hora = tempo.getHours()
var minuto = tempo.getMinutes()
var texto = document.querySelector('#msg')
var img = document.querySelector('#imagem')

texto.innerHTML = `Agora são ${hora} horas e ${minuto} minutos`
texto.style.textAlign = 'center'
if (hora < 12) {
    document.body.style.backgroundColor = 'rgb(133, 213, 250)' 
    img.src = 'foto-manha.png'
    
} else if (hora <= 18) {
    document.body.style.backgroundColor = 'rgb(235, 150, 50)' 
    img.src = 'foto-tarde.png'
} else {
    document.body.style.backgroundColor = 'rgb(0, 0, 60)' 
    img.src = 'foto-noite.png'
}

}
