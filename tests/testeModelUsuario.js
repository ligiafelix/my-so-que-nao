const {Usuario} = require('../database/models/');
console.log(Usuario.findAll());//substituiria o SELECT * FROM usuarios
                            // select * from usuarios inner join publicacoes.usuarios_id=usuarios.id