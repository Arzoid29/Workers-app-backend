import * as express from 'express';
import User from './models/users';
const router = express.Router()

// define the home page route
router.get('/login', (req: any, res: any) => {
  const { body } = req;
  const user = {
    email: body.email,
    password: body.password
  };

});

router.post('/users', (req: any, res: any) => {
  const { body } = req;
  console.log(req.body.email)
  console.log(body)
  try {
    //const user = User.create({ name: body.name, lastName: body.lastName, email: body.email, password: body.password });
    //return user;
    return User.findAll({})
  } catch (error) {
    throw error;
  }

})


// define the about route
router.get('/about', (req, res) => {
  res.send('About birds')
})

export default router;