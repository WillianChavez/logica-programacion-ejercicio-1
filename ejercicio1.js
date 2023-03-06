const numeros = []
let cantidadDeNumerosRecorridos = 0
const maximoDeNumerosPrimos = 10

function esPrimo(num) {
  if (num <= 1) return false
  if (num === 2) return true
  if (num % 2 === 0) return false
  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    if (num % i === 0) return false
  }
  return true
}

// rellenamos el array con numeros
for (let i = 1; i <= 100; i++) {
  numeros.push(i)
}

for (let indice = 0; cantidadDeNumerosRecorridos < maximoDeNumerosPrimos; indice++) {
  const num = numeros[indice]
  if (esPrimo(num)) {
    cantidadDeNumerosRecorridos++
    console.log(num)
  }
}
