const { Model } = require('sequelize');
recipientForModel = (sequelize, Sequelize)=>{
    class recipientMaster extends Model {}
    recipientMaster.init( 
        {
            id: { 
                type: Sequelize.INTEGER,
                allowNull: false, 
                defaultValue: null, 
                primaryKey: true, 
                autoIncrement: true 
            },
            recipient_for_title: { 
                type: Sequelize.STRING(30), 
                allowNull: false, 
                defaultValue: 0 
            }
        }, 
        {
            sequelize,
            modelName: 'recipient_for',
            tableName: 'recipient_for',
            timestamps: false,
            createdAt: false,
            updatedAt: false
        }
    );
    return recipientMaster;
};
module.exports = recipientForModel;