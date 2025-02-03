import supabase from '../feature/supabaseClient.js'

const max = 17
const numerosSorteados = new Set()

export async function sortearNumero() {
  try {
    if (numerosSorteados.size >= max) {
      console.log('Todos os números foram sorteados!')
      return null
    }

    let numeroSorteado
    do {
      numeroSorteado = Math.floor(Math.random() * max) + 1
    } while (numerosSorteados.has(numeroSorteado))

    numerosSorteados.add(numeroSorteado)

    const { data, error } = await supabase
      .from('linguagens')
      .select('*')
      .eq('id', numeroSorteado)
      .single()

    if (error) {
      console.error('Erro ao acessar o Supabase:', error.message)
      return null
    }

    return data
  } catch (err) {
    console.error('Erro ao acessar o Supabase:', err.message)
    return null
  }
}