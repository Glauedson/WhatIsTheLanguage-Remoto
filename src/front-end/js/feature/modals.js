//Modal de acerto de Linguagem
//Quando um player acerta qual era a linguagem
let selectedImage = null

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
export function modalPerfil(btn, modalPerfil, closeBtn, imageProfileHub, profilePlayer) {
  btn.addEventListener('click', () => {
    fetch('http://localhost:3000/avatars')
      .then(response => response.json())
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
        })

        modalPerfil.style.display = 'block'
      })
      .catch(error => {
        console.error('Erro ao buscar os perfis', error)
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