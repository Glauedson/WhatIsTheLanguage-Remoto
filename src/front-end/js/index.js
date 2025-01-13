const colorPicker = document.getElementById('colorPicker')
const headerModal = document.querySelector('.color-header-modal')

colorPicker.addEventListener('input', () => {
    headerModal.style.backgroundColor = colorPicker.value
})

document.addEventListener("DOMContentLoaded", () => {
    const link = document.getElementById("linkPeloCodigo")
    const modal = document.getElementById("modal")
    const btnConcluir = document.getElementById("btnConcluir")
    const inputNick = document.querySelector(".info-player input")
    const profilePlayer = document.querySelector('.profile-player')
    const inputContainer = document.querySelector('.info-player') // Para mensagens no input
    let targetUrl = ""
    let selectedImage = null // Variável para armazenar a imagem escolhida

    link?.addEventListener("click", event => {
        event.preventDefault()
        targetUrl = link.href
        modal.classList.add("block")
    })

    btnConcluir.addEventListener("click", () => {
        const nick = inputNick.value.trim()
        const color = colorPicker.value

        let hasError = false

        // Remove mensagens de erro anteriores
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

    const btn = document.querySelector('.profile-player button')
    const modalPerfil = document.getElementById('modal-perfil')
    const closeBtn = document.querySelector('.close-btn')
    const imageProfileHub = document.querySelector('.image-profile-hub')

    btn.addEventListener('click', () => {
        fetch('http://localhost:3000/avatars')
            .then(response => response.json())
            .then(data => {
                imageProfileHub.innerHTML = ''

                data.forEach(profile => {
                    const profileDiv = document.createElement('div')
                    profileDiv.classList.add('profile')
                    profileDiv.style.backgroundImage = `url(${profile.image_url})`

                    // Adiciona evento de clique para selecionar o avatar
                    profileDiv.addEventListener('click', () => {
                        selectedImage = profile.image_url
                        profilePlayer.style.backgroundImage = `url(${profile.image_url})`
                        modalPerfil.style.display = 'none' // Fecha o modal após selecionar
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

    // Função para exibir o popup
    function showPopup(element, message) {
        const popup = document.createElement('div')
        popup.classList.add('popup-message')
        popup.textContent = message
        element.parentNode.appendChild(popup) // Adiciona após o elemento
        popup.style.left = `${element.offsetLeft}px`
        popup.style.top = `${element.offsetTop - popup.offsetHeight - 10}px` // Acima do elemento
    }

    // Função para remover popups existentes
    function removePopups() {
        document.querySelectorAll('.popup-message').forEach(popup => popup.remove())
    }
})
