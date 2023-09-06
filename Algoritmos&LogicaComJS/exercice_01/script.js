let numberOne = prompt("Digite o primeiro número: ")
let numberTwo = prompt("Digite o segundo número: ")

numberOne = Number(numberOne)
numberTwo = Number(numberTwo)

let checkEqual = false

if (numberOne === numberTwo) {
  checkEqual = true
  alert("Legal! Os números de entrada são iguais.")
}
else {
  alert("Os números de entrada são diferentes.")
}

let sum   = numberOne + numberTwo
let sub   = numberOne - numberTwo
let mult  = numberOne * numberTwo
let div   = (numberOne / numberTwo).toFixed(2)
let rest  = numberOne % numberTwo

let checkSum = sum % 2

if(checkSum < 0) {
  checkSum = checkSum * (-1)
}

switch(checkSum) {
  case 0:
    checkSum = "par"
    break
  case 1:
    checkSum = "ímpar"
    break
}

alert(`A soma dos dois números é: ${sum}. E é um número ${checkSum}.`)
alert(`A subtração dos dois números é: ${sub}.`)
alert(`A multiplicação dos dois números é: ${mult}.`)
alert(`A divisão dos dois números é: ${div}.`)
alert(`O restante da divisão dos dois números é: ${rest}.`)
