const { Sequelize } = require('sequelize');

process.env.DATABASE_URL = 'postgres://qwarntvtxlktxf:ccd3a61c46a55fa138dd0625617a9e894bcb368c5955fe286ce687dd6d03dad9@ec2-3-224-97-209.compute-1.amazonaws.com:5432/d7n5hrd9drduki';

const sequelize = new Sequelize(
    process.env.DATABASE_URL,
    {
        dialect: 'postgres',
        dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false
            }
        }
    }
);

module.exports = sequelize;