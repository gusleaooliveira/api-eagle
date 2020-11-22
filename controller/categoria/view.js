const Categoria = require('../../model/categoria/index'), 
      { formListar, formListarUm, formCadastrar, formAlterar, formApagar, queryInserir, queryAlterar, queryApagar } = require('../funcoesViews'); 

exports.formListar = (req, res, next) => {
    formListar(Categoria, res, 'categoria/listar');
}
exports.formListarUm = (req, res, next) => { 
    formListarUm(req, Categoria, res, 'categoria/listarUm');
}
exports.formCadastrar = (req, res, next) => { 
    formCadastrar(res, 'categoria/cadastrar');
}
exports.formAlterar = (req, res, next) => { 
    formAlterar(Categoria, res, 'categoria/alterar');
}
exports.formApagar = (req, res, next) => { 
    formApagar(Categoria, res, 'categoria/apagar');
}
exports.queryInserir = (req, res, next) => {
    queryInserir(req, Categoria, res, 'sucesso');
}
exports.queryAlterar = (req, res, next) => { 
    queryAlterar(req, Categoria, res, 'sucesso');    
}
exports.queryApagar = (req, res, next) => { 
    queryApagar(req, Categoria, res, 'sucesso');
}