import { sortearNumero } from '../js/feature/API.js'
import { generatePlayerLife, diminuirVida } from '../js/feature/PlayerLife.js'
import { setupLanguageInput } from '../js/feature/inputLanguage.js'

function Game() {
  console.log(sortearNumero())
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
const botaoPular = document.querySelector('.buttons button:last-child')
const pontuacaoElemento = document.getElementById('pontuacao')
const codeBox = document.querySelector('.terminal')

const modal = document.getElementById('modalAcerto')
const botaoContinuar = document.getElementById('botaoContinuar')

let respostaDaAPI = null
let tentativas = 0
let pontos = 0
let dicas = []
let dicasExibidas = 0

function mostrarModal() {
  modal.style.display = 'block'
}

function esconderModal() {
  modal.style.display = 'none'
}

function limparDicas() {
  codeBox.innerHTML = ''
  dicasExibidas = 0
}

function atualizarPontuacao() {
  pontuacaoElemento.textContent = pontos.toString().padStart(4, '0')
}

function adicionarDicaAnimada(dicaTexto) {
  const dica = document.createElement('p')
  const span = document.createElement('span')
  span.classList.add('typed-text')
  dica.appendChild(span)
  codeBox.appendChild(dica)

  let i = 0
  function digitar() {
    if (i < dicaTexto.length) {
      span.textContent += dicaTexto.charAt(i)
      i++
      setTimeout(digitar, 40)
    }
  }
  digitar()
}

function adicionarDica() {
  if (dicasExibidas < dicas.length) {
    adicionarDicaAnimada(dicas[dicasExibidas])
    dicasExibidas++
    if (dicasExibidas === dicas.length) {
      encerrarJogo()
    }
  }
}

function atualizarModal(data, pontosGanhos) {
  const coverLanguage = document.querySelector('.cover-language')
  const modalLanguageInfo = document.querySelector('.modal-language-info h3')
  const modalTypeInfo = document.querySelector('.modal-language-info p span')
  const modalPontuacao = document.querySelector('.modal-points p span')

  coverLanguage.style.backgroundImage = `url(${data.foto_url})`
  modalLanguageInfo.textContent = data.nome
  modalTypeInfo.textContent = data.tipo
  modalPontuacao.textContent = pontosGanhos
}

let respostaDaAPIData = null
async function obterRespostaDaAPI() {
  try {
    const data = await sortearNumero()
    if (data) {
      respostaDaAPIData = data
      respostaDaAPI = data.nome.toLowerCase()
      dicas = [data.dica1, data.dica2, data.dica3, data.dica4, data.dica5]
      adicionarDica()
      atualizarModal(data)
    } else {
      console.log('Fim de jogo.')
      encerrarJogo()
    }
  } catch (error) {
    console.error('Erro ao buscar dados da API:', error)
  }
}

obterRespostaDaAPI()

function processarErro() {
  tentativas++
  diminuirVida()

  if (tentativas <= dicas.length) {
    adicionarDica()
  }
}

botaoEnviar.addEventListener('click', () => {
  const valorDigitado = campoEntrada.value.trim()
  campoEntrada.value = ''

  if (respostaDaAPI === null) {
    console.log('A resposta da API ainda não foi carregada.')
    return
  }

  if (valorDigitado.toLowerCase() === respostaDaAPI) {
    console.log('Resposta certa!')
    const pontosPorTentativa = [2000, 1000, 500, 100, 50]
    const pontosGanhos = pontosPorTentativa[tentativas] || 0
    pontos += pontosGanhos
    atualizarPontuacao()
    mostrarModal()
    atualizarModal(respostaDaAPIData, pontosGanhos)
  } else {
    console.log('Resposta errada.')
    processarErro()
  }
})

botaoPular.addEventListener('click', () => {
  console.log('Tentativa pulada.')
  processarErro()
})

botaoContinuar.addEventListener('click', () => {
  esconderModal()
  limparDicas()
  tentativas = 0
  generatePlayerLife()
  obterRespostaDaAPI()
})

function encerrarJogo() {
  const params = new URLSearchParams(window.location.search)

  const nick = params.get('nick')
  const color = params.get('color')
  const avatar = params.get('avatar')
  const modoDeJogo = 'Pelo Codigo'

   fetch('http://localhost:3000/ranking', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      nick: nick,
      cor: color,
      avatar: avatar,
      pontos: pontos,
      modo_jogo: modoDeJogo,
    }),
  })
  .then(response => response.json())
  .then(data => {
    console.log('Dados enviados e salvos com sucesso:', data)
  })
  .catch((error) => {
    console.error('Erro ao enviar dados para o servidor:', error)
  })
}
