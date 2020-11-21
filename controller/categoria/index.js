const Categoria = require('../../model/categoria/index'),
      { inserir, alterar, listar, listarUm, apagar } = require('../funcoesApi');
      
exports.inserir = (req, res, next) => {
    inserir(req, Categoria, res);
}

exports.alterar = (req, res, next) => {
    alterar(req, Categoria, res);
}

exports.listar = (req, res, next) => {
    listar(Categoria, res);
}

exports.listarUm = (req, res, next) => {
    listarUm(req, Categoria, res);
}

exports.apagar = (req, res, next) => {
    apagar(req, Categoria, res);
}