const {sequelize} = require('../db');
const {DataTypes} = require('sequelize');

const rewards = sequelize.define('rewards', {
    id:{
        type: DataTypes.INTEGER(11).UNSIGNED ,
        autoIncrement: true ,
        primaryKey: true ,
        allowNull: false
    },
    user_id:{
        type: DataTypes.INTEGER(11) ,
        allowNull: false
    },
    vacancy_appeals_id:{
        type: DataTypes.INTEGER(11) ,
        allowNull: false
    },
    rewarding_doc:{
        type: DataTypes.STRING(250)
    },
    rewarding_date:{
        type: DataTypes.STRING(250)
    },
    rewarding:{
        type: DataTypes.STRING(250)
    }
});

module.exports =  rewards  ;