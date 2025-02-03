document.addEventListener("DOMContentLoaded", () => {
  const supabaseUrl = "https://nzfpvklltvyxrdnvzxvs.supabase.co"
  const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im56ZnB2a2xsdHZ5eHJkbnZ6eHZzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzc1NDU2MDgsImV4cCI6MjA1MzEyMTYwOH0.mAqbvBfN6pswFTx16JVCVmkCLmWgJ8v6_2Scu30Z6rQ"
  
  const supabase = window.supabase.createClient(supabaseUrl, supabaseKey)
  
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
      const { data, error } = await supabase
        .from("ranking")  
        .select("*")      
        .order("pontos", { ascending: false })
  
      if (error) {
        console.error("Erro ao obter dados do ranking:", error.message)
      } else {
        data.forEach((profile) => {
          const profileElement = createProfile(profile)
          rankingHub.appendChild(profileElement)
        })
      }
    } catch (error) {
      console.error("Erro ao buscar os dados:", error)
    }
  }

  fetchAndRenderRanking()
})
