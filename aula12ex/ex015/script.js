function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txano')
    var res = document.querySelector('div#res')
    if (fano.value.lenght == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(txano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
    
    if (fsex[0].checked) {
        gênero = 'Homem'
        if (idade >=0 && idade < 10) { 
            //Criança
            img.setAttribute('src','bebe-h.png')
        }else if (idade < 21) {
            //Jovem
            img.setAttribute('src','jovem-h.png')
        }else if (idade < 50){
            //adulto
            img.setAttribute('src','adulto-h.png')
        }else {
            //Idoso
            img.setAttribute('src','idoso-h.png')
        }
    }else if (fsex[1].checked) {
        gênero = 'Mulher'
        if (idade >=0 && idade < 10) { 
            //Criança
            img.setAttribute('src','bebe-f.png')
        }else if (idade < 21) {
            //Jovem
            img.setAttribute('src','jovem-f.png')
        }else if (idade < 50){
            //adulto
            img.setAttribute('src','adulto-f.png')
        }else {
            //Idoso
            img.setAttribute('src','idosa-f.png')
        }
        
    } 
    res.style.textAlight = 'Center'
    res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
    res.appendChild(img)
}
}
