import { sortearNumero } from '../js/feature/API.js'
import { generatePlayerLife, diminuirVida } from '../js/feature/PlayerLife.js'
import { setupLanguageInput } from '../js/feature/inputLanguage.js'

function Game() {
    return console.log(sortearNumero())
}

generatePlayerLife()
window.Game = Game

const linguagens = [
  "Python", 
  "JavaScript", 
  "Java", 
  "C#", 
  "SQL", 
  "Ruby", 
  "PHP"
]

setupLanguageInput('campoEntrada', 'listaSugestoes', linguagens)

const campoEntrada = document.getElementById('campoEntrada')
const botaoEnviar = document.querySelector('.buttons button:first-child')
const pontuacaoElemento = document.getElementById('pontuacao')
const codeBox = document.querySelector('.code-box')

let respostaDaAPI = null
let tentativas = 0
let pontos = 0
let dicas = []
let dicasExibidas = 0

function atualizarPontuacao() {
  pontuacaoElemento.textContent = pontos.toString().padStart(4, '0')
}

function adicionarDica() {
  if (dicasExibidas < dicas.length) {
    const dica = document.createElement('p')
    dica.textContent = dicas[dicasExibidas]
    codeBox.appendChild(dica)
    dicasExibidas++

    if (dicasExibidas === dicas.length) {
      alert('Você perdeu o jogo!')
    }
  }
}

async function obterRespostaDaAPI() {
  try {
    const data = await sortearNumero()
    if (data) {
      respostaDaAPI = data.nome.toLowerCase()
      dicas = [data.dica1, data.dica2, data.dica3, data.dica4, data.dica5]
      adicionarDica() 
    } else {
      console.log('Nenhum dado recebido da API.')
    }
  } catch (error) {
    console.error('Erro ao buscar dados da API:', error)
  }
}

obterRespostaDaAPI()

botaoEnviar.addEventListener('click', () => {
  const valorDigitado = campoEntrada.value.trim()
  campoEntrada.value = ''

  if (respostaDaAPI === null) {
    console.log('A resposta da API ainda não foi carregada.')
    return
  }

  tentativas++

  if (valorDigitado.toLowerCase() === respostaDaAPI) {
    console.log('Resposta certa!')
    if (tentativas === 1) {
      pontos += 1000
    } else if (tentativas === 2) {
      pontos += 500
    } else if (tentativas === 3) {
      pontos += 100
    } else if (tentativas === 4) {
      pontos += 50
    }
    atualizarPontuacao()

    for (let i = dicasExibidas; i < dicas.length; i++) {
      const dica = document.createElement('p')
      dica.textContent = dicas[i]
      codeBox.appendChild(dica)
    }
  } else {
    console.log('Resposta errada.')
    diminuirVida()

    if (tentativas > dicas.length) {
      return
    }

    adicionarDica()
  }
})
