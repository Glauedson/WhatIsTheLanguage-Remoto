import { sortearNumero } from './feature/API.js'
import { generatePlayerLife, diminuirVida } from './feature/PlayerLife.js'
import { setupLanguageInput } from './feature/inputLanguage.js'
import { mostrarModal, esconderModal, atualizarModal, ModalFim, configurarBotaoConcluir } from './feature/modals.js'
import supabase from './feature/supabaseClient.js'

function Game() {
  console.log(sortearNumero())
}

generatePlayerLife()
window.Game = Game

// Lista de linguagens
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
let linguagensOrdenadas = []

function limparDicas() {
  codeBox.innerHTML = ''
  dicasExibidas = 0
  document.querySelector('main').classList.remove('pulsando')
  document.querySelectorAll('.life-player >img').forEach(heart => {
    heart.classList.remove('pulsando-heart', 'pulsando-soft')
  })
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
    if (dicasExibidas === 2) { 
      document.querySelectorAll('.life-player > img').forEach(heart => {
        heart.classList.add('pulsando-soft')
      })
    }

    if (dicasExibidas === 3) { 
      document.querySelectorAll('.life-player > img').forEach(heart => {
        heart.classList.remove('pulsando-soft')
      })

      document.querySelector('main').classList.add('pulsando')
      document.querySelectorAll('.life-player > img').forEach(heart => {
        heart.classList.add('pulsando-heart')
      })
    }
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
      linguagensOrdenadas.push(data.nome)

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

const somErro = new Audio('../assets/sounds/erro-effect.mp3')
function processarErro() {
  tentativas++
  diminuirVida()
  if (tentativas <= dicas.length) {
    adicionarDica()
  }

  somErro.currentTime = 0
  somErro.volume = 0.3
  somErro.play()

  const terminal = document.querySelector('.code-box')
  terminal.classList.add('shake')

  setTimeout(() => {
    terminal.classList.remove('shake')
  }, 400)
}

const somSucess = new Audio('../assets/sounds/sucess-effect.mp3')
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

    somSucess.currentTime = 0 
    somSucess.play()
    somSucess.volume = 0.5
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

async function encerrarJogo() {
  const params = new URLSearchParams(window.location.search);
  const nick = params.get('nick');
  const color = params.get('color');
  const avatar = params.get('avatar');
  const modoDeJogo = 'Pelo Codigo';

  try {
    const { error } = await supabase
      .from('ranking')
      .insert([{ nick, cor: color, avatar, pontos, modo_jogo: modoDeJogo }]);

    if (error) {
      console.error('Erro ao enviar dados para o Supabase:', error.message);
      return;
    }

    const modalFim = document.getElementById('modalFim');
    const botaoConcluir = document.getElementById('btnConcluir');
    ModalFim(modalFim, nick, color, pontos, avatar);
    configurarBotaoConcluir(modalFim, botaoConcluir, '../../../index.html');
  } catch (err) {
    console.error('Erro ao acessar o Supabase:', err.message);
  }
}


obterRespostaDaAPI()
