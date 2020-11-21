let mongoose = require('mongoose');
mongoose.Promise = global.Promise;

let Log =  new mongoose.Schema({
    data: { type: String, default: toString(Date.now) },
    hora: { type: String, default: toString(Date.now) },
    metodo: { type: String, default: 'GET' },
    url: { type: String, default: '/' },
    corpo: Array,
    mensagem: { type: String, default: 'Aconteceu uma  requisição!' },
    dataRequisicaoDB: { type: Date, default: Date.now }
}, {
    versionKey: false
});

module.exports = mongoose.model('Log', Log);
