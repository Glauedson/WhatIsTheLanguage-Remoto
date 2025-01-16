import { getSelectedImage, modalPerfil } from './feature/modals.js'

document.addEventListener("DOMContentLoaded", () => {
    const link = document.getElementById("linkPeloCodigo")
    const modal = document.getElementById("modal")
    const btnConcluir = document.getElementById("btnConcluir")
    const inputNick = document.querySelector(".info-player input")
    const profilePlayer = document.querySelector('.profile-player')
    const inputContainer = document.querySelector('.info-player')
    const colorPicker = document.getElementById('colorPicker')
    const headerModal = document.querySelector('.color-header-modal')
    const btn = document.querySelector('.profile-player button')
    const modalPerfilEl = document.getElementById('modal-perfil')
    const closeBtn = document.querySelector('.close-btn')
    const imageProfileHub = document.querySelector('.image-profile-hub')
  
    let targetUrl = ""
  
    modalPerfil(btn, modalPerfilEl, closeBtn, imageProfileHub, profilePlayer)
  
    colorPicker.addEventListener('input', () => {
      headerModal.style.backgroundColor = colorPicker.value
    })
  
    link?.addEventListener("click", event => {
      event.preventDefault()
      targetUrl = link.href
      modal.classList.add("block")
    })
  
    btnConcluir.addEventListener("click", () => {
      const nick = inputNick.value.trim()
      const color = colorPicker.value
      const selectedImage = getSelectedImage()
      let hasError = false
  
      removePopups()
  
      if (!nick) {
        showPopup(inputNick, 'Preencha o nome')
        hasError = true
      }
  
      if (!selectedImage) {
        showPopup(profilePlayer, 'Selecione uma imagem')
        hasError = true
      }
  
      if (!hasError) {
        const urlWithParams = `${targetUrl}?nick=${encodeURIComponent(nick)}&color=${encodeURIComponent(color)}&avatar=${encodeURIComponent(selectedImage)}`
        window.location.href = urlWithParams
      }
    })
  
    function showPopup(element, message) {
      const popup = document.createElement('div')
      popup.classList.add('popup-message')
      popup.textContent = message
      element.parentNode.appendChild(popup)
      popup.style.left = `${element.offsetLeft}px`
      popup.style.top = `${element.offsetTop - popup.offsetHeight - 10}px`
    }
  
    function removePopups() {
      document.querySelectorAll('.popup-message').forEach(popup => popup.remove())
    }
  })
