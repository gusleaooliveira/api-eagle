const { formApagar } = require("./categoria/view");

exports.formListar = (Colecao, res, formulario) => {
    Colecao.find({}, (erro, valores) => {
        mensagem(res, erro, valores, formulario);
    });
}
exports.formListarUm = (req, Colecao, res, formulario) => {
    let filtro = { _id: req.params.id };
    Colecao.findById(filtro, (erro, valores) => {
        mensagem(res, erro, valores, formulario);
    });
}

exports.formCadastrar = (res, formulario) => {
    renderizar(res, formulario);
}

exports.formAlterar = (Colecao, res, formulario) => {
    Colecao.find({}, (erro, valores) => {
        mensagem(res, erro, valores, formulario)
    });
}

exports.formApagar = (Colecao, res, formulario) => {
    Colecao.find({}, (erro, valores) => {
        mensagem(res, erro, valores, formulario);
    });
}

exports.queryInserir = (req, Colecao, res, formulario) => {
    let novo = new Colecao(req.body);
    novo.save((erro, valores) => {
        mensagem(res, erro, valores, formulario);
    });
}

exports.queryAlterar = (req, Colecao, res, formulario) => {
    let filtro = { _id: req.params.id }, novo = req.body;
    Colecao.findOneAndUpdate(filtro, novo, { new: true }, (erro, valores) => {
        mensagem(res, erro, valores, formulario);
    });
}

exports.queryApagar = (req, Colecao, res, formulario) => {
    let filtro = { _id: req.params.id };
    Colecao.findOneAndDelete(filtro, (erro, valores) => {
        mensagem(res, erro, valores, formulario);
    });
}


let renderizar = (res, formulario) => {
    res.render(formulario)
}
let mensagem = (res, erro, valores, formulario) => {
    if(erro) res.render('erro', { erro });
    res.render(formulario, { valores });
}