require('dotenv-safe').config()

const { json, urlencoded } = require('body-parser'),
      express = require('express'),
      mongoose = require('mongoose'),
      cors = require('cors');


let usuario = '', senha = '';

if(process.env.USUARIO == '' || process.env.USUARIO == undefined){
    usuario = 'gustavo';
}
if(process.env.SENHA == '' || process.env.SENHA == undefined){
    senha = 'oliveira18';
}

console.log(`${process.env.USUARIO || usuario}:${process.env.SENHA || senha}`);

let app = express(),
    Log = require('./model/log/index'),
    rotaLog = require('./routes/log/index'),
    rotaAplicativo = require('./routes/aplicativo/index'),
    rotaCategoria = require('./routes/categoria/index'),
    urlDB = `mongodb+srv://${process.env.USUARIO || usuario}:${process.env.SENHA || senha}@cluster0.sl4fb.gcp.mongodb.net/<dbname>?retryWrites=true&w=majority`,
    urlBase = `http://localhost:${process.env.PORT}/api/`;

mongoose.connect(urlDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}).then(() => {
    let data =  new Date();
    let log = {
        data: `${data.getDate()}/${data.getMonth()}/${data.getFullYear()}`,
        hora: `${data.getHours()}:${data.getMinutes()}:${data.getSeconds()}`,
        mensagem: 'DB Conectado!'
    };

    let novo = new Log(log);
    novo.save((erro, valores) => {
        console.log("#######################################");
        if(erro) console.error(`#-> Erro: ${erro}`);
        console.log(`#-> Log ${valores}`);
        console.log("#######################################");
    });

}).catch((erroDB) => {
    let data =  new Date();
    let log = {
        data: `${data.getDate()}/${data.getMonth()}/${data.getFullYear()}`,
        hora: `${data.getHours()}:${data.getMinutes()}:${data.getSeconds()}`,
        mensagem: `DB Erro: ${erroDB}`
    };

    let novo = new Log(log);
    novo.save((erro, valores) => {
        console.log("#######################################");
        if(erro) console.error(`#-> Erro: ${erro}`);
        console.log(`#-> Log ${valores}`);
        console.log("#######################################");
    });
});

mongoose.Promise = global.Promise;

app.set('view engine', 'pug');


app.use(json());
app.use(urlencoded());
app.use(cors({ origin: urlBase, credentials: true }));
app.use((req, res, next) => {
    let data =  new Date();
    let log = {
        data: `${data.getDate()}/${data.getMonth()}/${data.getFullYear()}`,
        hora: `${data.getHours()}:${data.getMinutes()}:${data.getSeconds()}`,
        mensagem: `Acesso a api!`,
        metodo: req.method,
        corpo: Object.values(req.body),
        url: req.url,
    };

    let novo = new Log(log);
    novo.save((erro, valores) => {
        console.log("#######################################");
        if(erro) console.error(`#-> Erro: ${erro}`);
        console.log(`#-> Log ${valores}`);
        console.log("#######################################");
    });
    next();
});
app.use('/static/', express.static(__dirname+'/public'));
app.use('/api/log/', rotaLog);
app.use('/api/categoria/', rotaCategoria);
app.use('/api/aplicativo/', rotaAplicativo);

app.listen(process.env.PORT || 5000);