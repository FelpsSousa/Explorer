alert("Vamos seguir com operações matemáticas básicas.")

numberOne = prompt("Entre com o primeiro número: ")
numberTwo = prompt("Entre com o segundo número: ")

numberOne = Number(numberOne)
numberTwo = Number(numberTwo)

const sum     = numberOne + numberTwo
const sub     = numberOne - numberTwo
const mult    = numberOne * numberTwo
const div     = numberOne / numberTwo
const restDiv = numberOne % numberTwo 

alert("Soma: " + sum)
alert("Subtração : " + sub)
alert("Multiplicação:" + mult)
alert("Divisão: " + div)
alert("Resto da Divisão: " + restDiv)
