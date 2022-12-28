const { Model } = require('sequelize');
recipientMatrixModel = (sequelize, Sequelize)=>{
    class recipientMatrix extends Model {}
    recipientMatrix.init( 
        {
            id: { 
                type: Sequelize.INTEGER,
                allowNull: false, 
                defaultValue: null, 
                primaryKey: true, 
                autoIncrement: true 
            },
            state_id: { 
                type: Sequelize.INTEGER, 
                allowNull: false, 
                defaultValue: 0 
            },
            recipient_for: { 
                type: Sequelize.INTEGER, 
                allowNull: false, 
                defaultValue: 0 
            },
            mail_type: { 
                type: Sequelize.STRING(30), 
                allowNull: false, 
                defaultValue: 0 
            },
            emp_id: { 
                type: Sequelize.INTEGER, 
                allowNull: false, 
                defaultValue: 0 
            }
        }, 
        {
            sequelize,
            modelName: 'recipient_mail_list',
            tableName: 'recipient_mail_list',
            timestamps: false,
            createdAt: false,
            updatedAt: false
        }
    );
    return recipientMatrix;
};
module.exports = recipientMatrixModel;