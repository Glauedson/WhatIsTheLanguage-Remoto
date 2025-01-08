export function generatePlayerLife() {
  const headerCodeBox = document.querySelector('.header-code-box')

  headerCodeBox.innerHTML = `
    <div class="playerinfo">
      <img src="../assets/icons/logo-icon.svg" alt="logo" width="20px">
      <p>LIFE PLAYER:</p>
    </div>
  `

  
  for (let i = 0; i < 4; i++) {
    const lifeDiv = document.createElement('div')
    lifeDiv.classList.add('life-player')
    lifeDiv.innerHTML = `
      <img src="../assets/icons/heart-icon.svg" alt="vida" width="20px">
    `
    headerCodeBox.appendChild(lifeDiv)
  }
}


export function diminuirVida() {
  const vidas = document.querySelectorAll('.life-player')
  if (vidas.length > 0) {
    
    const ultimaVida = vidas[vidas.length - 1]
    ultimaVida.remove()
  }
}