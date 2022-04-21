import { Sequelize, DataTypes } from 'sequelize';
import 'dotenv/config';
const sequelize = new Sequelize(`postgres://postgres:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`);


const User = sequelize.define('users', {
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
    allowNull: false,
    unique: true
    // allowNull defaults to true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
    // allowNull defaults to true
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
    // allowNull defaults to true
  }
});

export default User;