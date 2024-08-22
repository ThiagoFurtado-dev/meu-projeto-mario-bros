const form = document.querySelector(".formulario")
const mascara = document.querySelector(".mascara-formulario")
function cliqueinobotao() {
  form.style.left = "50%"
  form.style.transform = "translateX(-50%)"
  mascara.style.visibility = "visible"

}
function clicknamascara() {
  form.style.left = "-300px"
  form.style.transform = "translateX(0)"
  mascara.style.visibility = "hidden"
}
const contato = document.querySelector(".header")
const formulario = document.querySelector('.formulario')
function faleconosco() {
  formulario.style.left = "50%"
  formulario.style.transform = "translateX(-50%)"
  mascara.style.visibility = "visible"
}




