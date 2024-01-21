let contador = 0
const box = document.querySelector('.transicao')
const imagens2 = document.querySelectorAll('.transicao img')

function slider(){
    contador++
    if (contador > imagens2.length -1){
        contador = 0
    }
    box.style.transform = `translateX(${-contador * 1250}px)`
}
setInterval(slider,2000)