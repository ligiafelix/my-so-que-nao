const {Publicacao, sequelize} = require('../database/models');
Publicacao.findByPk(2, {include:'autor'}).then(
    data => {
       data.forEach(d => console.log (d.toJSON()));
 
        sequelize.close();
    }
)