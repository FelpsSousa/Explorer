// variáveis
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")
let randomNumber = Math.round(Math.random() * 10)
let xAttemps = 1;

// Eventos
btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleResetClick)
document.addEventListener('keydown', function(e) {
  if (e.key =='Enter' && screen1.classList.contains('hide')) {
    handleResetClick()
  }
})

// funções
function handleTryClick(event) {

  event.preventDefault() // não faça o padrão

  const inputNumber = document.querySelector("#inputNumber")

  if(Number(inputNumber.value) == randomNumber) {
    screen1.classList.add("hide")
    screen2.classList.remove("hide")

    document
      .querySelector(".screen2 h2")
      .innerText = `acertou em ${xAttemps} tentativas`
  }

  inputNumber.value = ""
  xAttemps++
}

function handleResetClick() {
  toggleScreen()
  xAttemps = 1
  randomNumber = Math.round(Math.random() * 10)
}

function toggleScreen() {
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
}
