import { Sequelize, DataTypes } from 'sequelize';
const sequelize = new Sequelize('sqlite::memory:');

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