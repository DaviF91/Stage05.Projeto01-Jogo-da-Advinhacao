const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')
const btnTry = document.querySelector('#btnTry')
const btnReset = document.querySelector('#btnReset')
let randomNumber = Math.round(Math.random() * 10)
let xAttempts = 1

//Eventos
btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleResetClick)
document.addEventListener('keydown', backScreen)

// funções callback
function handleTryClick(event) {
  event.preventDefault() // não faça o padrão

  const inputNumber = document.querySelector('#inputNumber')

  if (Number(inputNumber.value) < 0) {
    alert('O número difitado não pode ser negativo')
    xAttempts--
  }
  if (Number(inputNumber.value) > 10) {
    alert('O número digitado não pode ser maior que 10')
    xAttempts--
  }
  if (Number(inputNumber.value) == '') {
    alert('Por favor digite um número')
    xAttempts--
  }
  if (Number(inputNumber.value) == randomNumber) {
    toggleScreen()

    screen2.querySelector(
      'h2'
    ).innerText = `Você acertou em ${xAttempts} tentativas`
  }
  inputNumber.value = ''
  xAttempts++
}

function handleResetClick() {
  toggleScreen()
  xAttempts = 1
  randomNumber = Math.round(Math.random() * 10)
}

function toggleScreen() {
  screen1.classList.toggle('hide')
  screen2.classList.toggle('hide')
}

function backScreen(e) {
  if (e.key == 'Enter' && screen1.classList.contains('hide')) {
    handleResetClick()
  }
}
