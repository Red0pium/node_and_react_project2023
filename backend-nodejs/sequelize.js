"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const sequelize = new sequelize_typescript_1.Sequelize({
    database: 'LearningFactDb',
    username: 'learningDbUser',
    port: 5464,
    password: 'password',
    host: 'localhost',
    dialect: 'postgres',
    logging: false, // Disable logging SQL queries (optional)
});
exports.default = sequelize;
//# sourceMappingURL=sequelize.js.map