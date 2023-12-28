import { Sequelize } from 'sequelize-typescript';

const sequelize = new Sequelize({
    database: 'LearningFactDb',
    username: 'learningDbUser',
    port: 5464,
    password: 'password',
    host: 'localhost',
    dialect: 'postgres', // Use 'postgres' for PostgreSQL
    logging: false, // Disable logging SQL queries (optional)
});

export default sequelize;