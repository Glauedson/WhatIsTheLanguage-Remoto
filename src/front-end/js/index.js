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
    let targetUrl = ""

    link.addEventListener("click", (event) => {
        event.preventDefault()
        targetUrl = link.href
        modal.classList.add("block")
    })

    btnConcluir.addEventListener("click", () => {
        if (inputNick.value.trim() && targetUrl) {
            window.location.href = targetUrl
        }
    })
})
