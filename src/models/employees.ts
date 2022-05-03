import { Sequelize, DataTypes } from 'sequelize';
import 'dotenv/config';
const sequelize = new Sequelize(`postgres://postgres:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`);

const Employee = sequelize.define('employee', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  documentId: {
    type: DataTypes.STRING,
    allowNull: false
    // allowNull defaults to true
  },
  salary: {
    type: DataTypes.STRING,
    allowNull: false
    // allowNull defaults to true
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false
    // allowNull defaults to true
  }
}, {
  tableName: 'employee',
});

export default Employee;