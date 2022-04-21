import { Sequelize, DataTypes } from 'sequelize';
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
    type: DataTypes.INTEGER,
    allowNull: false
    // allowNull defaults to true
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false
    // allowNull defaults to true
  }
});

export default Employee;