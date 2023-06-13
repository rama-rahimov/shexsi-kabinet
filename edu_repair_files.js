const {sequelize} = require('../db');
const {DataTypes} = require('sequelize');

const Edu_repair_files = sequelize.define('edu_repair_files', {
    id:{
        type: DataTypes.INTEGER(11) ,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false                                                                                                                                                                 
    },
    edu_repair_apply_id:{
        type: DataTypes.INTEGER(11)
    },
    doc_scan:{
        type: DataTypes.STRING(250)
    }
},{
    charset:'latin1',
    collate:'latin1_swedish_ci'
});

module.exports =  Edu_repair_files ;