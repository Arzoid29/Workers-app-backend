import User from '../models/users';
import * as bcrypt from 'bcrypt';
import { UserType } from 'types';

export const addUser = async (req: any, res: any) => {
  const { body } = req;
  const saltRounds = 10;
  try {
    const hashPassword = await bcrypt.hash(body.password, saltRounds);
    const user = await User.create({ name: body.name, lastName: body.lastName, email: body.email, password: hashPassword });
    res.json({ user });
  } catch (error) {
    throw error;
  }
};

export const login = async (req: any, res: any) => {
  const { body } = req;
  try {
    const user = await User.findOne({ where: { email: body.email }}) as unknown as UserType;

    if(user) {
        const match = await bcrypt.compare(body.password, user.password);
    
        if(match) {
          res.json({
            status: 200,
            message: 'User login',
            user
          });
        }

        else {
          res.json({
            status: 400,
            message: 'Incorrect password'
          });
        }
    }
    else {
      res.json({status: 404, message: 'User not found'});
    }
    
  } catch (error) {
    throw error;
  }
};
