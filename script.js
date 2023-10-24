function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")
  //pegar a tag img
  const img = document.querySelector("#profile img")
  //substituir a imagem
  if (html.classList.contains("light")) {
    //se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute(
      "alt",
      "Foto de Donizete Junior usando um par de oculos de lente transparente com filtro para luz azul, " +
        "sério com uma blusa de frio vermelha e preta e uma blusa polo vermelha e branca, com uma lousa de branca ao fundo, riscada por caneta azul."
    )
  } else {
    //se tiver sem light mode, manter a imagem normal
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute(
      "alt",
      "Foto de Donizete Junior, sério com uma blusa de frio vermelha e preta " +
        "e uma blusa polo vermelha e branca, com uma lousa de branca ao fundo, riscada " +
        "por caneta azul."
    )
  }
}
