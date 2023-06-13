const {sequelize} = require('../db');
const {DataTypes} = require('sequelize');

const specialty_31 = sequelize.define('specialty_31', {
    id:{
        type: DataTypes.INTEGER(11) ,
        autoIncrement: true ,
        allowNull: false ,
        primaryKey: true
    },
    enterprises_id:{
        type: DataTypes.STRING(400)
    },
    code_id:{
        type: DataTypes.INTEGER(11)
    },
    name:{
        type: DataTypes.STRING(450) ,
        allowNull: true
    },
    sifr:{
        type: DataTypes.STRING(50)
    },
    status:{
        type: DataTypes.TINYINT(2),
        defaultValue: 1
    },
    oc_direction:{
        type: DataTypes.INTEGER(11)
    },
    education_duration:{
        type: DataTypes.INTEGER(11)
    },
    education_level:{
        type: DataTypes.INTEGER(11)
    },
    teaching_language:{
        type: DataTypes.INTEGER(11)
    },
    group_limit:{
        type: DataTypes.SMALLINT(3),
        defaultValue: 0
    },
    deleted:{
        type: DataTypes.TINYINT(2) ,
        defaultValue: 0
    },
    deleted_at:{
        type: DataTypes.STRING(100)
    },
    exc:{
        type: DataTypes.TINYINT(1) ,
        defaultValue: 0
    },
    teaching_year:{
        type: DataTypes.INTEGER(11)
    },
    holy:{
        type: DataTypes.STRING(50)
    }
},{
    indexes:[{
        name: 'specialty_31_index',
        using: 'BTREE',
        fields: [
        'enterprises_id', 
        'code_id', 
        'oc_direction', 
        'teaching_year'
    ]
    }],
    collate:'utf8_unicode_ci'
});

module.exports =  specialty_31  ;