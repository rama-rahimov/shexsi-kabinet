const {sequelize} = require('../db');
const {DataTypes} = require('sequelize');

const Emp_history_scans = sequelize.define('emp_history_scans', {
    id:{
        type: DataTypes.INTEGER(11).UNSIGNED ,
        primaryKey: true,
        autoIncrement: true,
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
    doc_scan:{
        type: DataTypes.STRING(250)
    }
});

module.exports =  Emp_history_scans  ;