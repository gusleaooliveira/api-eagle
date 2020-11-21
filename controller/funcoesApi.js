exports.inserir = (req, Colecao, res) =>{
    let novo =  new Colecao(req.body);
    novo.save((erro, valores) => {
        mensagem(res, erro, valores);
    });
}

exports.alterar = (req, Colecao, res) => {
    let filtro = { _id: req.params.id }, novo = req.body;
    Colecao.findOneAndUpdate(filtro, novo, { new: true }, (erro, valores) => {
        mensagem(res, erro, valores);
    });
}

exports.listar = (Colecao, res) => {
    Colecao.find({}, (erro, valores) => {
        mensagem(res, erro, valores)
    });
}

exports.listarUm = (req, Colecao, res) => {
    let filtro = {_id: req.params.id }
    Colecao(filtro, (erro, valores) => {
        mensagem(res, erro, valores);
    });
}

exports.apagar = (req, Colecao, res) => {
    let filtro = { _id: req.params.id }
    Colecao.findOneAndDelete(filtro,  (erro, valores) => {
        mensagem(res, erro, valores);
    });
}

let mensagem = (res, erro, valores) => {
    console.log(`#-> Ocorreu: ${erro}|${valores}`);
    if(erro) res.send(erro)
    res.send(valores)
}