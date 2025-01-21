import { sortearNumero } from './feature/API.js'
import { generatePlayerLife, diminuirVida } from './feature/PlayerLife.js'
import { setupLanguageInput } from './feature/inputLanguage.js'
import { mostrarModal, esconderModal, atualizarModal, ModalFim, configurarBotaoConcluir } from './feature/modals.js'

function Game() {
  console.log(sortearNumero())
}

generatePlayerLife()
window.Game = Game

// Atualmente são 17 linguagens
// Espero que não seja tão dificil
const linguagens = [
  "Python",
  "JavaScript",
  "Java",
  "C#",
  "SQL",
  "Ruby",
  "PHP",
  "Go",
  "Kotlin",
  "Swift",
  "C++",
  "TypeScript",
  "Rust",
  "R",
  "Shell Script",
  "Lua",
  "C"
]

setupLanguageInput('campoEntrada', 'listaSugestoes', linguagens)

const campoEntrada = document.getElementById('campoEntrada')
const botaoEnviar = document.querySelector('.buttons button:first-child')
const botaoPular = document.querySelector('.buttons button:last-child')
const pontuacaoElemento = document.getElementById('pontuacao')
const codeBox = document.querySelector('.terminal')
const modal = document.getElementById('modalAcerto')
const botaoContinuar = document.getElementById('botaoContinuar')

const modalElements = {
  coverLanguage: document.querySelector('.cover-language'),
  modalLanguageInfo: document.querySelector('.modal-language-info h3'),
  modalTypeInfo: document.querySelector('.modal-language-info p span'),
  modalPontuacao: document.querySelector('.modal-points p span')
}

let respostaDaAPI = null
let tentativas = 0
let pontos = 0
let dicas = []
let dicasExibidas = 0

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

let respostaDaAPIData = null
async function obterRespostaDaAPI() {
  try {
    const data = await sortearNumero()
    if (data) {
      respostaDaAPIData = data
      respostaDaAPI = data.nome.toLowerCase()
      dicas = [data.dica1, data.dica2, data.dica3, data.dica4, data.dica5]
      adicionarDica()
      atualizarModal(data, 0, modalElements)
    } else {
      encerrarJogo()
    }
  } catch (error) {
    console.error(error)
  }
}

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
  if (respostaDaAPI === null) return
  if (valorDigitado.toLowerCase() === respostaDaAPI) {
    const pontosPorTentativa = [2000, 1000, 500, 100, 50]
    const pontosGanhos = pontosPorTentativa[tentativas] || 0
    pontos += pontosGanhos
    atualizarPontuacao()
    mostrarModal(modal)
    atualizarModal(respostaDaAPIData, pontosGanhos, modalElements)
  } else {
    processarErro()
  }
})

botaoPular.addEventListener('click', processarErro)

botaoContinuar.addEventListener('click', () => {
  esconderModal(modal)
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
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ nick, cor: color, avatar, pontos, modo_jogo: modoDeJogo })
  })
  .then(response => response.json())
  .then(() => {
    const modalFim = document.getElementById('modalFim')
    const botaoConcluir = document.getElementById('btnConcluir')
    ModalFim(modalFim, nick, color, pontos, avatar)
    configurarBotaoConcluir(modalFim, botaoConcluir, '../../../index.html')
  })
  .catch(console.error)
}

obterRespostaDaAPI()
