let mongoose = require('mongoose');
mongoose.Promise = global.Promise;


let Categoria =  new mongoose.Schema({
    categoria: String
}, {
    versionKey: false
});

module.exports = mongoose.model('Categoria', Categoria);