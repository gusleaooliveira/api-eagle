function getById(id) {
    return document.querySelector(id).value;
}
function recarregar(){
    window.location.reload(false);
}

function enviar(url, corpo, metodo) {
    let cabecalho = {
        method: metodo,
        headers: { 'Content-Type': 'application/json' },
        body: corpo 
    }; 
    fetch(url, cabecalho)
        .then((res) => { alert('Salvo com sucesso!'); recarregar(); } )
        .catch((erro) => { alert('Ocorreu um erro!'); recarregar(); })
}

function apagarCategoria(){
    enviar(`/view/categoria/${getById("#id")}/`, [], 'delete');
}

function alterarCategoria(){
    let corpo = JSON.stringify({
        categoria: getById("#categoria"),
        icone: getById('#icone')
    });
    enviar(`/view/categoria/${getById("#id")}/`, corpo, 'put');
}

function enviarCategoria() {
    let corpo = JSON.stringify({
        categoria: getById('#categoria'),
        icone: getById('#icone')
    });
    enviar('/view/categoria/', corpo, 'post');
}