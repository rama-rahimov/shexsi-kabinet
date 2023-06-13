const {sequelize} = require('../db');
const {DataTypes} = require('sequelize');

const Education_duration = sequelize.define('education_duration', {
    id:{
        type: DataTypes.INTEGER(11) ,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    name:{
        type: DataTypes.STRING(200)
    },
    deleted:{
        type: DataTypes.TINYINT(1),
        defaultValue: 0
    }
},{
    indexes:[{
        name: 'education_duration_index',
        using: 'BTREE',
        fields: ['name', 'deleted']
}],
});

module.exports =  Education_duration  ;