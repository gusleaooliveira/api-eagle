const Aplicativo = require('../../model/aplicativo/index'),
      { inserir, alterar, listar, listarUm, apagar } = require('../funcoesApi');
      
exports.inserir = (req, res, next) => {
    inserir(req, Aplicativo, res);
}

exports.alterar = (req, res, next) => {
    alterar(req, Aplicativo, res);
} 

exports.listar = (req, res, next) => {
    listar(req, Aplicativo, res);
}

exports.listarUm = (req, res, next) => {
    listarUm(req, Aplicativo, res);
}

exports.apagar = (req, res, next) => {
    apagar(req, Aplicativo, res);
}

