const {sequelize} = require('../db');
const {DataTypes} = require('sequelize');

const Dq_miq_exam = sequelize.define('dq_miq_exam', {
    fin:{
        type: DataTypes.STRING(100)
    },
    fenn:{
        type: DataTypes.STRING(100)
    },
    bolme:{
        type: DataTypes.STRING(100)
    },
    umumi_bal:{
        type: DataTypes.DOUBLE
    },
    ixtisas_bal:{
        type: DataTypes.DOUBLE
    },
    metodika_bal:{
        type: DataTypes.DOUBLE
    },
    tarix:{
        type: DataTypes.STRING(100)
    },
    imtahan:{
        type: DataTypes.STRING(100)
    }
});
Dq_miq_exam.removeAttribute('id');

module.exports =  Dq_miq_exam ;