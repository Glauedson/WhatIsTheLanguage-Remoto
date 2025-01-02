const express = require('express');
const { Pool } = require('pg'); 
const app = express();

// Dados pra acessar o banco
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',   
  database: 'witl', 
  password: '123', 
  port: 5432, 
});

// Ver se o banco de daods foi achado
pool.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao PostgreSQL:', err.message);
  } else {
    console.log('Conectado ao PostgreSQL.');
  }
});

// Endpoint dos dados de todas as linguagens
app.get('/dados', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM linguagens'); // Substitua pelo nome da sua tabela
    res.json(result.rows); 
  } catch (err) {
    res.status(500).send('Erro ao buscar dados: ' + err.message);
  }
});

// Servidor
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});