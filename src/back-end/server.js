const cors = require('cors')
const express = require('express');
const { Pool } = require('pg'); 
const app = express();
app.use(cors());
app.use(express.json());

// Dados pra acessar o banco
// Como informado do ReadME, você deve alterar
// Esses dados caso seu banco de dados não tenha as mesmas configurações
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',   
  database: 'witl', 
  password: '123', 
  port: 5432, 
});


// Ver se foi possivel conectar ao banco de dados
pool.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao PostgreSQL:', err.message)
  } else {
    console.log('Conectado ao PostgreSQL.')
  }
});


// Endpoint principal dos dados de todas as linguagens
// http://localhost:3000/dados
app.get('/dados', async (req, res) => {
  const { id } = req.query 
  
  try {
    if (id) {
      const result = await pool.query('SELECT * FROM linguagens WHERE id = $1', [id])
      
      if (result.rows.length === 0) {
        return res.status(404).send('Nenhum dado encontrado com o ID fornecido')
      }
      
      res.json(result.rows[0]) 
    } else {
      const result = await pool.query('SELECT * FROM linguagens')
      res.json(result.rows)
    }
  } catch (err) {
    res.status(500).send('Erro ao buscar dados: ' + err.message)
  }
})


// Endpoint dos avatares dos players
// http://localhost:3000/avatars
app.get('/avatars', async (req, res) => {
  const { id } = req.query 

  try {
    let result;
    if (id) {
      result = await pool.query('SELECT * FROM images WHERE id = $1', [id]) 
    } else {
      result = await pool.query('SELECT * FROM images') 
    }

    if (result.rows.length === 0) {
      return res.status(404).send('Nenhum avatar encontrado para o id fornecido')
    }

    res.json(result.rows) 
  } catch (err) {
    res.status(500).send('Erro ao buscar avatares: ' + err.message)
  }
})


// Rota para obter os dados do ranking
// http://localhost:3000/ranking
app.get('/ranking', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM ranking ORDER BY pontos DESC');

    res.status(200).json({
      message: 'Ranking obtido com sucesso!',
      data: result.rows,
    });
  } catch (err) {
    res.status(500).send('Erro ao obter dados do ranking: ' + err.message);
  }
});


// Endpoint para inserir dados no ranking
app.post('/ranking', async (req, res) => {
  const { nick, cor, avatar, pontos, modo_jogo } = req.body;

  try {
    const result = await pool.query(
      'INSERT INTO ranking (nick, cor, avatar, pontos, modo_jogo) VALUES ($1, $2, $3, $4, $5) RETURNING *',
      [nick, cor, avatar, pontos || 0, modo_jogo]
    );

    res.status(201).json({
      message: 'Dados inseridos com sucesso!',
      data: result.rows[0],
    });
  } catch (err) {
    res.status(500).send('Erro ao inserir dados no ranking: ' + err.message);
  }
});

// Servidor
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`)
});