const { Model } = require('sequelize');
employeeMasterModel = (sequelize, Sequelize)=>{
    class employeeMaster extends Model {}
    employeeMaster.init( 
        {
            emp_id: { 
                type: Sequelize.INTEGER,
                allowNull: false, 
                defaultValue: null, 
                primaryKey: true, 
                autoIncrement: true 
            },
            emp_name: { 
                type: Sequelize.STRING(50), 
                allowNull: false, 
                defaultValue: null 
            },
            active: { 
                type: Sequelize.INTEGER,
                allowNull: false, 
                defaultValue: 1
            },
        }, 
        {
            sequelize,
            modelName: 'employee_tbl',
            tableName: 'employee_tbl',
            timestamps: false,
            createdAt: false,
            updatedAt: false
        }
    );
    return employeeMaster;
};
module.exports = employeeMasterModel;