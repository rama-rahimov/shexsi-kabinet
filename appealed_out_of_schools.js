const {sequelize} = require('../db');
const {DataTypes} = require('sequelize');

const Appealed_out_of_schools = sequelize.define('appealed_out_of_schools', {
    id:{
        type: DataTypes.INTEGER(11).UNSIGNED ,
        primaryKey: true ,
        autoIncrement: true ,
        allowNull: false
    },
    appeals_out_of_school_id:{
        type: DataTypes.INTEGER (11) ,
        allowNull: false
    },
    out_of_school_id:{
        type: DataTypes.INTEGER(11) ,
        allowNull: false  
    }
});

module.exports =  Appealed_out_of_schools  ;