
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

//forma 2 de ligar com promises - Async/Await
async function levantarFuncionarios() {
    try {
        let resultado = await conexao.query('select * from funcionarios limit 0,5');
        console.log(resultado);
    } catch (error) {
        console.log('Deu muito ruim!');
        console.log(error.parent.errno);
    }
    conexao.close();

}
levantarFuncionarios();