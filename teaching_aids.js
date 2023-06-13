const {sequelize} = require('../db');
const {DataTypes} = require('sequelize');

const teaching_aids = sequelize.define('teaching_aids', {
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
    aid_name:{
        type: DataTypes.STRING(250)
    },
    aid_publication_date:{
        type: DataTypes.STRING(250)
    }
});

module.exports =  teaching_aids ;