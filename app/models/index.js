const Sequelize = require("sequelize");
const dbConfig = require('../config/db.config');

const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD, {
        host: dbConfig.HOST,
        dialect: dbConfig.dialect,
        pool: {
            max: dbConfig.pool.max,
            min: dbConfig.pool.min,
            acquire: dbConfig.pool.acquire,
            idle: dbConfig.pool.idle
        },
        logging: true,
        logQueryParameters: false,
    }
);

async function checkConnection() {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}
checkConnection();
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.products                = require('./productMaster.model')(sequelize, Sequelize);
db.recipient_for           = require('./recipientFor.model')(sequelize, Sequelize);
db.recipient_mail_list     = require('./recipientMatrix.model')(sequelize, Sequelize);
db.state_tbl               = require('./stateMaster.model')(sequelize, Sequelize);
db.employee_tbl               = require('./employeeMaster.model')(sequelize, Sequelize);

db.sequelize.sync({ force: false});
module.exports = db;