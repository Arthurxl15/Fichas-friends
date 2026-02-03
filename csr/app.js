require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.use(express.json());

// Conexão com o Banco de Dados (Use a variável de ambiente para segurança)
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("Conectado ao MongoDB!"))
  .catch(err => console.error("Erro ao conectar:", err));

// Rotas
app.use('/auth', require('./routes/authRoutes'));
app.use('/fichas', require('./routes/fichaRoutes'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
