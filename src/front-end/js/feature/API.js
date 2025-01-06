// nesse js sempre vai ser mandado uma linguagem da api
// um numero é sorteado e depois é puxado na api, esse numero nunca vai
// se repetir

const max = 7
const numerosSorteados = new Set()

export function sortearNumero() {

  if (numerosSorteados.size === max) {
    console.log('Fim')
    return
  }

  let numeroSorteado
  do {
    numeroSorteado = Math.floor(Math.random() * max) + 1
  } while (numerosSorteados.has(numeroSorteado))

  numerosSorteados.add(numeroSorteado)
  console.log('Número sorteado:', numeroSorteado)
  return numeroSorteado
}
