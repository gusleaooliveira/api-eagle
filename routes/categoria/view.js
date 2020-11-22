const controller = require('../../controller/categoria/view'),
      { Router } = require('express'),
      rota = Router();
      
rota.get('/listar/', controller.formListar);
rota.get('/listar/:id', controller.formListarUm);
rota.get('/cadastrar/', controller.formCadastrar);
rota.get('/alterar/', controller.formAlterar);
rota.get('/apagar/', controller.formApagar);

rota.post('/', controller.queryInserir);
rota.put('/:id', controller.queryAlterar);
rota.delete('/:id', controller.queryApagar);

module.exports = rota; 