const mongoose = require('mongoose');

const FichaSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  classe: { type: String, required: true }, // Ex: "Artífice"
  nomePersonagem: String,
  atributos: {
    forca: Number,
    destreza: Number,
    constituicao: Number,
    inteligencia: Number,
    sabedoria: Number,
    carisma: Number
  },
  // O campo abaixo salva informações que só existem em certas classes
  especificos: mongoose.Schema.Types.Mixed 
});

module.exports = mongoose.model('Ficha', FichaSchema);
