import * as cors from 'cors';
import * as express from 'express'
import router from './routes';
import * as bodyParser from 'body-parser';
import { Sequelize } from 'sequelize';
import 'dotenv/config';


const app = express();

const sequelize = new Sequelize(process.env.DB_NAME, 'postgres', process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'postgres',
    port: parseInt(process.env.DB_PORT),
});

  
sequelize.authenticate().then(async () => {
    await sequelize.sync({ alter: true });
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
