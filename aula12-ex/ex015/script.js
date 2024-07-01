function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) { //verifica se a caixa está vazia e se o ano está a frente do ano que atualmente estamos.
        window.alert("Erro! Verifique os dados novamente!")
    } else {
        var fsex = document.getElementsByName("radsex")
        var idade = ano - Number(fano.value)
        //res.innerHTML = `Idade calculada: ${idade}`
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade < 10) {
                // criança
                img.setAttribute('src', 'bebehomem.png')
            } else if (idade < 21) {
                // jovem
                img.setAttribute('src', 'jovemhomem.png')
            } else if (idade < 50) {
                // adulto
                img.setAttribute('src', 'adultohomem.png')
            } else {
                // idoso
                img.setAttribute('src', 'idosohomem.png')
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                // criança
                img.setAttribute('src', 'bebemulher.png')
            } else if (idade < 21) {
                // jovem
                img.setAttribute('src', 'jovemmulher.png')
            } else if (idade < 50) {
                // adulto
                img.setAttribute('src', 'adultomulher.png')
            } else {
                // idoso
                img.setAttribute('src', 'idosomulher.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
}