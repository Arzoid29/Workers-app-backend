import { Sequelize, DataTypes } from 'sequelize';
const sequelize = new Sequelize('postgres::memory:');

const User = sequelize.define('public.users', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
    // allowNull defaults to true
  },
  password: {
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

export default User;