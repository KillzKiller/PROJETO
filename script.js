function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")
  // pegar a tag img
  const image = document.querySelector("#profile img")
  // substituir a imagem
  if (html.classList.contains("light")) {
    // se tiver light mode, adicionar a imagem light
    image.setAttribute("src", "./avatar-light.png")
  } else {
    // se tiver sem light mode, manter a imagem normal
    image.setAttribute("src", "./avatar.png")
  }
}
