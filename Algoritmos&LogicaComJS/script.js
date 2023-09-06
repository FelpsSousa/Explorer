const patients = [
  {
    name: "João",
    age: 20,
    weight: 100,
    height: 190,
  },
  {
    name: "Dora",
    age: 19,
    weight: 55,
    height: 165,
  },
  {
    name: "Jimmy",
    age: 25,
    weight: 78,
    height: 173,
  },
]

function calculateIMC(patient) {
  return `
    Paciente ${patient.name} possui o IMC de ${(patient.weight / ((patient.height / 100) ** 2)).toFixed(2)}
  `
}

for (let patient of patients) {
  let IMCmessage = calculateIMC(patient)
  alert(IMCmessage)
}
