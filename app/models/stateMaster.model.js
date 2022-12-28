const { Model } = require('sequelize');
stateMasterModel = (sequelize, Sequelize)=>{
    class stateMaster extends Model {}
    stateMaster.init( 
        {
            state_id: { 
                type: Sequelize.INTEGER,
                allowNull: false, 
                defaultValue: null, 
                primaryKey: true, 
                autoIncrement: true 
            },
            state_name: { 
                type: Sequelize.STRING(30), 
                allowNull: false, 
                defaultValue: 0 
            },
            working_status: { 
                type: Sequelize.INTEGER,
                allowNull: false, 
                defaultValue: 0
            },
        }, 
        {
            sequelize,
            modelName: 'state_tbl',
            tableName: 'state_tbl',
            timestamps: false,
            createdAt: false,
            updatedAt: false
        }
    );
    return stateMaster;
};
module.exports = stateMasterModel;