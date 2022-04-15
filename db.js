const Sequelize = require('sequelize')
const sequelize = new Sequelize('eshop', 'ty5vbvrprvls', '', {
    host: '88uod8tpjozn.eu-west-3.psdb.cloud',
    dialect: 'mysql',
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false
        }
    },
});

(async () => {
    try {
        await sequelize.authenticate();
        console.log('database connection successful');
    } catch (error) {
        console.log('database connection failed');
    }
})();

module.exports = {Sequelize, sequelize}