import * as cors from 'cors';
import * as express from 'express'
import router from './routes';
import bodyParser = require('body-parser');
const { Sequelize } = require('sequelize');


const app = express();

const sequelize = new Sequelize('usuarios', 'postgres', 'mysecretpassword', {
    host: 'localhost',
    dialect: 'postgres',
    port: 5440
  });

  
sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
}).catch((err: any) => {
    console.error('Unable to connect to the database:', err);
});
  

app.use(bodyParser.urlencoded({ extended: false, limit: '50mb' }));
app.use('/api/v1', router);


app.listen(3000, ()=>{
    console.log("Server is running on port 3000");
});
app.use(cors());
