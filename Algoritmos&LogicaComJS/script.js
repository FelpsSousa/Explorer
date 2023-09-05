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

let patientsNames = []
let patientsAges = []
let patientsWeigths = []
let patientsHeight = []

for (let patient of patients) {
  patientsNames.push(patient.name)
  patientsAges.push(patient.age)
  patientsWeigths.push(patient.weight)
  patientsHeight.push(patient.height)
}

for (let i = 0; i < patients.length; i++) {
  alert(`Paciente ${patientsNames[i]} tem ${patientsAges[i]} anos, ${patientsHeight[i]}cm de altura 
  e ${patientsWeigths[i]} Kg.`)
}
alert