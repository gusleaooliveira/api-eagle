const controller = require('../../controller/categoria/index'),
      { Router } = require('express'),
      rota = Router();

rota.get('/', controller.listar);
rota.get('/:id', controller.listarUm);
rota.post('/', controller.inserir);
rota.put('/:id', controller.alterar);
rota.delete('/:id', controller.apagar);

module.exports = rota;