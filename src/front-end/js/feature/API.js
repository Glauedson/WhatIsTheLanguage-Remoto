// nesse js sempre vai ser mandado uma linguagem da api
// um numero é sorteado e depois é puxado na api, esse numero nunca vai
// se repetir

const max = 7
const numerosSorteados = new Set()

export async function sortearNumero() {

  if (numerosSorteados.size === max) {
    console.log('Fim')
    return
  }

  let numeroSorteado
  do {
    numeroSorteado = Math.floor(Math.random() * max) + 1
  } while (numerosSorteados.has(numeroSorteado))

  numerosSorteados.add(numeroSorteado)
  
  try {
    const response = await fetch(`http://localhost:3000/dados?id=${numeroSorteado}`)
    if (!response.ok) {
      console.error(`Erro na API: ${response.statusText}`)
      return
    }

    const data = await response.json()
    
    return data
  } catch (err) {
    console.error('Erro ao acessar a API:', err.message)
  }
  
}
