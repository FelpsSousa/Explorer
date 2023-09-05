let student   = prompt("Qual o nome do(a) aluno(a)?")
let testOne   = prompt("Qual a nota da primeira prova?")
let testTwo   = prompt("Qual a nota da segunda prova?")
let testThree = prompt("Qual a nota da terceira prova?")

let average = (Number(testOne) + Number(testTwo) + Number(testThree)) / 3

average = average.toFixed(2)

if (average > 6) {
  alert("Parabéns " + student + "! Sua média foi de: " + average)
} 
else if (average < 3) {
  alert("Reprovado")
}
else {
  alert(student + " estude para sua prova de recuperação! Sua média foi de: " + average)
}
