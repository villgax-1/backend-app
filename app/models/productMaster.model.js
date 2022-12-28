const { Model } = require('sequelize');
productMasterModel = (sequelize, Sequelize)=>{
    class productMaster extends Model {}
    productMaster.init( {
        id: { 
            type: Sequelize.INTEGER,
            allowNull: false, 
            defaultValue: null, 
            primaryKey: true, 
            autoIncrement: true 
        },
        title: { 
            type: Sequelize.STRING(30), 
            allowNull: false, 
            defaultValue: 0 
        },
        price: { 
            type: Sequelize.INTEGER, 
            allowNull: false, 
            defaultValue: 0 
        },
        description: { 
            type: Sequelize.STRING(30), 
            allowNull: false, 
            defaultValue: 'NULL' 
        },
        }, {
            sequelize,
            modelName: 'products',
            tableName: 'products',
            timestamps: false,
            createdAt: false,
            updatedAt: false
        }
    );
    return productMaster;
};
module.exports = productMasterModel;