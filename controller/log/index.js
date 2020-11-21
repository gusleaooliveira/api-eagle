const Log = require('../../model/log/index'),
      { inserir, alterar, listar, listarUm, apagar } = require('../funcoesApi');  

exports.inserir = (req, res, next) => {
    inserir(req, Log, res)
}

exports.alterar = (req, res, next) => {
    alterar(req, Log, res)
}

exports.listar = (req, res, next) => {
    listar(Log, res);
}

exports.listarUm = (req, res, next) => {
    listarUm(req, Log, res);
}

exports.apagar = (req, res, next) => {
    apagar(req, Log, res);
}