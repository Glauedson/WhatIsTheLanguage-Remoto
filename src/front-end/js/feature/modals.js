//Modal de acerto de Linguagem
//Quando um player acerta qual era a linguagem

export function mostrarModal(modal) {
  modal.style.display = 'block'
}

export function esconderModal(modal) {
  modal.style.display = 'none'
}

export function atualizarModal(data, pontosGanhos, modalElements) {
  const { coverLanguage, modalLanguageInfo, modalTypeInfo, modalPontuacao } = modalElements
  coverLanguage.style.backgroundImage = `url(${data.foto_url})`
  modalLanguageInfo.textContent = data.nome
  modalTypeInfo.textContent = data.tipo
  modalPontuacao.textContent = pontosGanhos.toString()
}


//Modal da criação de personagem
//Usado principalmente na pasta index.html

const SUPABASE_URL = 'https://nzfpvklltvyxrdnvzxvs.supabase.co'
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im56ZnB2a2xsdHZ5eHJkbnZ6eHZzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzc1NDU2MDgsImV4cCI6MjA1MzEyMTYwOH0.mAqbvBfN6pswFTx16JVCVmkCLmWgJ8v6_2Scu30Z6rQ'

const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY)

let selectedImage = null

export function modalPerfil(btn, modalPerfil, closeBtn, imageProfileHub, profilePlayer) {
  btn.addEventListener('click', () => {
    // Ajuste o URL de acordo com a URL do seu Supabase
    fetch('https://nzfpvklltvyxrdnvzxvs.supabase.co/rest/v1/images', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'apikey': SUPABASE_KEY,
        'Authorization': `Bearer ${SUPABASE_KEY}`,
      }
    })
    .then(response => {
      if (!response.ok) {
        throw new Error(`Erro ao buscar dados: ${response.status}`)
      }
      return response.json()
    })
    .then(data => {
      imageProfileHub.innerHTML = ''

      data.forEach(profile => {
        const profileDiv = document.createElement('div')
        profileDiv.classList.add('profile')
        profileDiv.style.backgroundImage = `url(${profile.image_url})`

        profileDiv.addEventListener('click', () => {
          selectedImage = profile.image_url
          profilePlayer.style.backgroundImage = `url(${profile.image_url})`
          modalPerfil.style.display = 'none'
        })

        imageProfileHub.appendChild(profileDiv)
      });

      modalPerfil.style.display = 'block'
    })
    .catch(error => {
      console.error('Erro ao buscar os perfis do Supabase:', error)
    })
  })

  closeBtn.addEventListener('click', () => {
    modalPerfil.style.display = 'none'
  })
}

export function getSelectedImage() {
  return selectedImage
}

export function ModalFim(modal, nome, color, pontos, avatar) {
  modal.style.display = 'block'
  const nomeElemento = modal.querySelector('.player-score h1:nth-child(1)')
  const pontosElemento = modal.querySelector('.player-score h1:nth-child(2)')
  const corElemento = modal.querySelector('.color-profile')
  const avatarElemento = modal.querySelector('.avatar-profile')
  nomeElemento.textContent = nome
  pontosElemento.textContent = pontos
  corElemento.style.backgroundColor = color
  avatarElemento.style.backgroundImage = `url(${avatar})`
}

export function configurarBotaoConcluir(modal, botaoConcluir, destino) {
  botaoConcluir.addEventListener('click', () => {
    modal.style.display = 'none'
    window.location.href = destino
  })
}