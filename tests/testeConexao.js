<<<<<<< HEAD

//1- importa o sequelize
const sequelize = require('sequelize');

//2- criar  um objeto contendo os dados da conexao
const config = {
    username: 'root',
    password: '',
    host: 'localhost',
    port: 3306,
    dialect: 'mysql',
    database: 'osmaker'
}

// 3- cria a conexao 
const conexao = new sequelize(config); //new vem da orientacao objeto (programacao orientado ao objeto). ela cria 1 objeto e retorna para guardar na cost conexao

//4- Realiza a consulta (assíncronas)
let promise = conexao.query('select * from funcionarios limit 0,5');

// forma 1 de lidar com promeses: callbacks
promise.then(                    //quando a promessa for cumprida execute esta função
    data => {
        console.log(data);
        conexao.close();
   }
). catch(
    err => {
        console.log('Deu muito ruim!');
    }
)

console.log(promise);

=======
// 1 - Importa sequelize
const sequelize = require('sequelize');

// 2 - Criar um objeto contendo os dados da conexão
const config = require('./config');

// 3 - Cria a conexão
const conexao = new sequelize(config);

// 4 - Realiza a consulta (assíncronas)!!!
let promise = conexao.query("SELECT * FROM funcionarios LIMIT 0,5");

// Forma 1 de lidar com promeses: callbacks
promise.then(
    data => {
        console.log(data);
        conexao.close();
    }
).catch(
    err => {
        console.log("Deu muito ruim!");
    }
)

console.log(promise);
>>>>>>> f76fa1fae873e6b210eab8885d39bcbeb153af5a
