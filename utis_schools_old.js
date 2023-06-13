const {sequelize} = require('../db');
const {DataTypes} = require('sequelize');

const utis_schools_old = sequelize.define('utis_schools_old', {
    id:{
        type: DataTypes.INTEGER(10).UNSIGNED ,
        allowNull: false ,
        autoIncrement: true ,
        primaryKey: true
    },
    address:{
        type: DataTypes.STRING(250)
    },
    longitude:{
        type: DataTypes.DECIMAL(30,6)
    },
    paralel:{
        type: DataTypes.DECIMAL(30,6)
    },
    regionId:{
        type: DataTypes.INTEGER(11)
    },
    regionName:{
        type: DataTypes.STRING(250)
    },
    schoolCode:{
        type: DataTypes.INTEGER(11)
    },
    schoolKind:{
        type: DataTypes.STRING(250)
    },
    schoolKindId:{
        type: DataTypes.INTEGER(11)
    },
    name:{
        type: DataTypes.STRING(250)
    },
    schoolType:{
        type: DataTypes.STRING(250)
    },
    schoolTypeId:{
        type: DataTypes.INTEGER(11)
    },
    subjection:{
        type: DataTypes.STRING(250)
    },
    subjectionId:{
        type: DataTypes.INTEGER(11)
    }
});

module.exports = utis_schools_old  ;