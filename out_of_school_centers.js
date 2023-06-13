const {sequelize} = require('../db');
const {DataTypes} = require('sequelize');

const out_of_school_centers = sequelize.define('out_of_school_centers', {
    id:{
        type: DataTypes.INTEGER(11).UNSIGNED ,
        autoIncrement: true ,
        primaryKey: true ,
        allowNull: false
    },
    name:{
        type: DataTypes.STRING(250) ,
        defaultValue: ''
    },
    direction:{
        type: DataTypes.STRING(250) ,
        defaultValue: ''
    },
    circle:{
        type: DataTypes.STRING(250) ,
        defaultValue: ''
    },
    enterprise:{
        type: DataTypes.STRING(250) ,
        defaultValue: ''
    },
    city:{
        type: DataTypes.STRING(250) ,
        defaultValue: ''
    },
    region:{
        type: DataTypes.STRING(250) ,
        defaultValue: ''
    },
    address:{
        type: DataTypes.STRING(250) ,
        defaultValue: ''
    },
    locationLat:{
        type: DataTypes.DOUBLE(22,5)
    },
    locationLon:{
        type: DataTypes.DOUBLE(22,5)
    },
    utis_id:{
        type: DataTypes.STRING(250)
    },
    phone1:{
        type: DataTypes.STRING(250)
    },
    phone2:{
        type: DataTypes.STRING(250)
    },
    email:{
        type: DataTypes.STRING(250)
    },
    director:{
        type: DataTypes.STRING(250)
    },
    min_age:{
        type: DataTypes.STRING(250) ,
        defaultValue: '0'
    },
    min_age_2:{
        type: DataTypes.STRING(250) ,
        defaultValue: '0'
    }
});

module.exports =   out_of_school_centers  ;