// modal de "Resposta certa" 
// quando um player acerta a linguagem e mostra os pontos
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


  
