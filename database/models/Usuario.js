module.exports = (sequelize, DataTypes)=>{

    return sequelize.define(
        "Usuario", // Nome do model
        {
            id: { //objeto literal descrevendo as colunas q esta model vai representar
                type: DataTypes.INTEGER,
                autoIncrement: true,
                allowNull: false,
                primaryKey: true
            },
            nome: {
                type: DataTypes.STRING,
                allowNull: false
            },
            email: {
                type: DataTypes.STRING,
                allowNull: false
            },
            senha: {
                type: DataTypes.STRING,
                allowNull: false
            },
            foto:{
                type: DataTypes.STRING,
                allowNull: true
            }
        },
        {
            tableName: "usuarios",
            timestamps: true,
            paranoid: true
        }
    );
}