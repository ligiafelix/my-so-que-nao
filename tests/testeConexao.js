// 1 - Importa sequelize
const sequelize = require('sequelize');

// 2 - Criar um objeto contendo os dados da conexão
const config = require('./config');

// 3 - Cria a conexão
const conexao = new sequelize(config);

// 4 - Realiza a consulta (assíncronas)!!!
let promise = conexao.query("SELECT * FROM funcionarios LIMIT 0,5"); //retorna uma promessa de q esses dados vao chegar!

// Forma 1 de lidar com promeses: callbacks
promise.then( //qndo o resultado desta promessa chegar - execute essa funcao
    data => {
        console.log(data);
        conexao.close();
    }
).catch( //caso der erro execute esta funcao
    err => {
        console.log("Deu muito ruim!");
    }
)

console.log(promise);
