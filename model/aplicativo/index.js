let mongoose = require('mongoose');
mongoose.Promise = global.Promise;

let Aplicativo = new mongoose.Schema({
    nome: { type: String, required: true},
    slogan: String,
    descricao: String,
    liscenca: String,
    comandoSnap: Array,
    categoria: [
        { type: mongoose.Schema.Types.ObjectId, ref: 'Categoria' }
    ]
}, {
    versionKey: false
});

module.exports = mongoose.model('Aplicativo', Aplicativo);