function carregar() {
  var msg = window.document.getElementById('msg')
  var img = window.document.getElementById('imagem')
  var data = new Date()
  var hora = data.getHours()
  // var hora = 22
  msg.innerHTML = `Agora são ${hora} horas`
  if (hora >= 0 && hora < 12) {
    //Bom Dia
    img.src = 'morningphoto.jpg'
    document.body.style.background = '#e2cd9f'
  } else if (hora >= 12 && hora < 18) {
    //boa tarde
    img.src = 'afternoonphoto.jpg'
    document.body.style.background = '#b9846f'
  } else {
    // Boa noite
    img.src = 'nightphoto.jpg'
    document.body.style.background = '#515154'
  }
}
