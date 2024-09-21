function verificar() {
    var data= new Date()
    var ano= data.getFullYear()
    var fano= document.getElementById('txtano')
    var res= document.getElementById('res')
    if(fano.value==0 || fano.value > ano) {
        window.alert('Erro, verifica os dados')
    }
    else {
        var fsex = document.getElementsByName('radsex')
        var idade= ano- Number(fano.value)
        var genero=""
        var img= document.createElement('img')
        img.setAttribute('id','foto')
        if (fsex[0].checked) {
            genero="Homem"
            if (idade >=0 && idade<10) {
                img.setAttribute('src','fotos/Hkid1.png')
            } else if (idade <21) {
                img.setAttribute('src','fotos/Hyoung1.png')
            } else if (idade <50) {
                img.setAttribute('src','fotos/Hadult1.png')
            } else {
                img.setAttribute('src','fotos/Hold1.png')
            }
        } else if(fsex[1].checked) {
            genero='Mulher'
            if (idade >=0 && idade<10) {
                img.setAttribute('src','fotos/Mkid1.png')
            } else if (idade <21) {
                img.setAttribute('src','fotos/Myoung1.png')
            } else if (idade <50) {
                img.setAttribute('src','fotos/Madult1.png')
            } else {
                img.setAttribute('src','fotos/Mold1.png')
            }
        }
        res.style.textAlign="center"
        res.innerHTML=`Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}