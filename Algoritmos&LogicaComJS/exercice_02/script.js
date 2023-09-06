const students = [
  {
    name: "João",
    testOne: 7.5,
    testTwo: 8.7,
  },
  {
    name: "Alice",
    testOne: 5.5,
    testTwo: 9.8,
  },
  {
    name: "Pedro",
    testOne: 6.1,
    testTwo: 4.5,
  },
  {
    name: "Maria",
    testOne: 8.0,
    testTwo: 7.3,
  },
  {
    name: "Lucas",
    testOne: 9.2,
    testTwo: 6.4,
  },
  {
    name: "Ana",
    testOne: 6.8,
    testTwo: 8.9,
  },
  {
    name: "Miguel",
    testOne: 7.3,
    testTwo: 7.7,
  },
  {
    name: "Julia",
    testOne: 8.5,
    testTwo: 8.0,
  },
  {
    name: "Gustavo",
    testOne: 5.9,
    testTwo: 6.7,
  },
  {
    name: "Camila",
    testOne: 6.7,
    testTwo: 9.5,
  },
  {
    name: "Matheus",
    testOne: 7.6,
    testTwo: 7.2,
  },
  {
    name: "Larissa",
    testOne: 9.0,
    testTwo: 9.1,
  },
  {
    name: "Enzo",
    testOne: 6.4,
    testTwo: 6.8,
  },
  {
    name: "Isabela",
    testOne: 7.8,
    testTwo: 8.3,
  },
  {
    name: "Rafael",
    testOne: 8.2,
    testTwo: 7.0,
  },
  {
    name: "Lívia",
    testOne: 5.2,
    testTwo: 6.6,
  },
  {
    name: "Felipe",
    testOne: 7.7,
    testTwo: 9.7,
  },
  {
    name: "Lara",
    testOne: 6.5,
    testTwo: 5.8,
  },
  {
    name: "Henrique",
    testOne: 8.9,
    testTwo: 7.5,
  },
  {
    name: "Sophia",
    testOne: 9.5,
    testTwo: 8.8,
  },
  {
    name: "Daniel",
    testOne: 7.0,
    testTwo: 7.1,
  },
  {
    name: "Vitória",
    testOne: 6.3,
    testTwo: 8.6,
  },
  {
    name: "Eduardo",
    testOne: 8.4,
    testTwo: 6.9,
  },
  {
    name: "Bianca",
    testOne: 6.6,
    testTwo: 5.7,
  },
  {
    name: "Carlos",
    testOne: 7.4,
    testTwo: 8.1,
  },
  {
    name: "Sophie",
    testOne: 5.8,
    testTwo: 6.2,
  },
  {
    name: "Arthur",
    testOne: 8.7,
    testTwo: 9.3,
  },
  {
    name: "Laura",
    testOne: 7.1,
    testTwo: 7.8,
  },
  {
    name: "Raul",
    testOne: 6.2,
    testTwo: 5.6,
  },
  {
    name: "Clara",
    testOne: 7.9,
    testTwo: 8.4,
  },
  {
    name: "Leonardo",
    testOne: 6.9,
    testTwo: 7.6,
  },
  {
    name: "Valentina",
    testOne: 8.6,
    testTwo: 9.6,
  },
  {
    name: "Luciana",
    testOne: 7.2,
    testTwo: 6.7,
  },
  {
    name: "Giovanni",
    testOne: 5.6,
    testTwo: 5.0,
  },
  {
    name: "Fernanda",
    testOne: 9.3,
    testTwo: 8.2,
  },
  {
    name: "Gabriel",
    testOne: 6.0,
    testTwo: 6.5,
  },
  {
    name: "Manuela",
    testOne: 8.8,
    testTwo: 9.0,
  },
  {
    name: "Diego",
    testOne: 6.3,
    testTwo: 7.9,
  },
  {
    name: "Carolina",
    testOne: 7.6,
    testTwo: 6.1,
  },
  {
    name: "Ricardo",
    testOne: 8.1,
    testTwo: 8.5,
  },
  {
    name: "Gabriela",
    testOne: 5.7,
    testTwo: 5.9,
  },
  {
    name: "Luiz",
    testOne: 7.8,
    testTwo: 6.4,
  },
  {
    name: "Isabel",
    testOne: 6.7,
    testTwo: 6.6,
  },
  {
    name: "Cauã",
    testOne: 8.3,
    testTwo: 8.7,
  },
  {
    name: "Mariana",
    testOne: 7.4,
    testTwo: 7.7,
  },
  {
    name: "Rodrigo",
    testOne: 6.5,
    testTwo: 6.0,
  },
  {
    name: "Beatriz",
    testOne: 9.1,
    testTwo: 9.4,
  },
  {
    name: "Samuel",
    testOne: 6.8,
    testTwo: 6.3,
  },
  {
    name: "Larissa",
    testOne: 7.0,
    testTwo: 7.2,
  },
  {
    name: "Rafaela",
    testOne: 8.2,
    testTwo: 8.9,
  },
  {
    name: "Pedro",
    testOne: 6.6,
    testTwo: 6.9,
  },
  {
    name: "Cláudia",
    testOne: 7.3,
    testTwo: 7.4,
  },
]

let studentsNames   = []
let studentsTestOne = []
let studentsTestTwo = []
let studentsAverage = []

for (let student of students) {
  studentsNames.push(student.name)
  studentsTestOne.push(student.testOne)
  studentsTestTwo.push(student.testTwo)
}

for (let i = 0; i < students.length; i++) {

  studentsAverage[i] = (((studentsTestOne[i] + studentsTestTwo[i]) / 2).toFixed(2))
  
  let message = ''
  
  if (studentsAverage[i] >= 7) {
    message = `Parabéns, ${studentsNames[i]}! Você foi aprovado(a) no concurso!`  
  }
  else {
    message = `Não foi dessa vez, ${studentsNames[i]}! Tente novamente!` 
  }
  
  alert(`A média do(a) aluno(a) ${studentsNames[i]} é: ${studentsAverage[i]}.
  ${message}`)
}
