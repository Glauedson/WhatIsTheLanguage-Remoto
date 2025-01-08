# </> What Is The Language?
<div align="center">

![logo](src/front-end/assets/icons/logo-large.png)
</div>

Um projeto Full-Stack desenvolvido na avaliação de Desenvolvimento Web, com o tema livre, decidi criar um site Game interativo e divertido de advinhar linguagens de programação. Como inspiração usei o site [Gamedle](https://www.gamedle.wtf).

## </> Topicos

- [Descrição do Projeto](#descrição-do-projeto)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Endpoints da API](#endpoints-da-api)
- [Como Executar o Projeto Localmente](#como-executar-o-projeto-localmente)
- [Licença](#licença)
- [Contato](#contato)

## </> Descrição do Projeto

O **What Is The Language**  ou **WITL** é um site Game onde o usuário advinha qual é a linguagem de progamação através de dicas, o usuário pode escolher entre 2 modos de jogo, **Advinhe Pela Logo** ou **Advinhe Pelo Código**, ambos os modos possuem sistemas de pontos e vidas, o usuário ganha pontos por acertar a advinhar a linguagem e perde vidas toda vez que erra. O jogo encerra quando o usuário perder todas as vidas ou acertando todas as linguagens, após isso aparecerá uma tela **Ranking** de todos os jogadores com seus nomes e suas pontuações.

## </> Tecnologias Utilizadas

- **Frontend**:

  [![My Skills](https://skillicons.dev/icons?i=js,html,css)](https://skillicons.dev)

- **Backend**:
  
  [![My Skills](https://skillicons.dev/icons?i=nodejs,postgres)](https://skillicons.dev)

- **APIs**:
  - Endpoints proprios com dados de todas as linguagens


## </> Endpoints da API

### 1. **Obter dados de todas as linguagens**
**Endpoint:** `GET /dados`

**Parâmetros de Consulta:**
- `id` (obrigatório): ID da linguagem.

**Exemplo de Requisição:**
```http
GET /dados?id=1
```

**Exemplo de Resposta:**
```json
{
    "id": 1,
    "nome": "Python",
    "foto_url": "https://cdn.iconscout.com/icon/free/png-256/free-python-logo-icon-download-in-svg-png-gif-file-formats--technology-social-media-vol-5-pack-logos-icons-3030224.png?f=webp",
    "tipo": "back",
    "dica1": "x = [i**2 for i in range(5)]",
    "dica2": "def soma(a, b): return a + b",
    "dica3": "for i in range(5): print(i)",
    "dica4": "print(\"Hello, World!\")",
    "dica5": "# código em Python"
}
```

## </> Como Executar o Projeto Localmente

1. Clone este repositório:
   ```bash
   git clone https://github.com/Glauedson/WhatIsTheLanguage.git
   ```
2. Navegue até o diretório do projeto:
   ```bash
   cd WhatIsTheLanguage
   ```
3. Configure o backend:
   - Certifique-se de que o PostgreSQL está instalado e configurado.
   - Atualize os dados para acessar seu banco de dados na pasta `src/back-end` no arquivo `server.js`.
   - Execute o backend usando o comando no terminal do VsCode:
     ```bash
     node src/back-end/server.js
     ```
4. Inicie o frontend abrindo o arquivo `index.html` em um navegador.

## 📄 Licença

Este projeto não possui uma licença definida. Sinta-se livre para utilizar e modificar o código conforme necessário.

## 📩 Contato

Para dúvidas ou sugestões, entre em contato:

- **Nome**: Glauedson Carlos Rodrigues
- **Email**: (gluedson18s@gmail.com)
