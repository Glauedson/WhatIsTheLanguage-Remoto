document.addEventListener("DOMContentLoaded", () => {
    const endpoint = "http://localhost:3000/ranking"
  
    const rankingHub = document.querySelector(".ranking-hub")
  
    
    function createProfile(profile) {
      
      const profileContent = document.createElement("div")
      profileContent.className = "profile-ranking-content"
  
      const colorProfile = document.createElement("div")
      colorProfile.className = "color-profile"
      colorProfile.style.backgroundColor = profile.cor
  
      const avatarProfile = document.createElement("div")
      avatarProfile.className = "avatar-profile"
      avatarProfile.style.backgroundImage = `url(${profile.avatar})`
  
      const profileInfo = document.createElement("div")
      profileInfo.className = "profile-player-info"
  
      const nameScore = document.createElement("div")
      nameScore.className = "name-score"
      nameScore.innerHTML = `
        <p>Nome</p>
        <p>Pontos</p>
      `
  
      const playerScore = document.createElement("div")
      playerScore.className = "player-score"
      playerScore.innerHTML = `
        <h1>${profile.nick}</h1>
        <h1>${profile.pontos}</h1>
      `

      profileInfo.appendChild(nameScore)
      profileInfo.appendChild(playerScore)
      profileContent.appendChild(colorProfile)
      profileContent.appendChild(avatarProfile)
      profileContent.appendChild(profileInfo)
  
      return profileContent
    }
  
    async function fetchAndRenderRanking() {
      try {
        const response = await fetch(endpoint)
        const data = await response.json()
  
        if (data && data.data) {
          data.data.forEach((profile) => {
            const profileElement = createProfile(profile)
            rankingHub.appendChild(profileElement)
          })
        } else {
          console.error("Erro ao obter dados do ranking:", data.message)
        }
      } catch (error) {
        console.error("Erro ao buscar os dados:", error)
      }
    }
  
    fetchAndRenderRanking()
  })
  