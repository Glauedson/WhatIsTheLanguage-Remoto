
import { sortearNumero } from '../js/feature/API.js'

function Game() {
    
    return console.log(sortearNumero())
}

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
  
  const campoEntrada = document.getElementById('campoEntrada')
  const listaSugestoes = document.getElementById('listaSugestoes')
  
  campoEntrada.addEventListener('input', function() {
    const textoDigitado = campoEntrada.value.toLowerCase()
    listaSugestoes.innerHTML = '' 
    if (textoDigitado) {
      const linguagensFiltradas = linguagens.filter(l => l.toLowerCase().startsWith(textoDigitado))
      linguagensFiltradas.forEach(l => {
        const li = document.createElement('li')
        li.textContent = l
        li.onclick = function() {
          campoEntrada.value = l 
          listaSugestoes.innerHTML = '' 
          listaSugestoes.style.display = 'none' 
        }
        listaSugestoes.appendChild(li)
      })
      listaSugestoes.style.display = 'block' 
    } else {
      listaSugestoes.style.display = 'none' 
    }
  })
  