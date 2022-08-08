import User from '../models/modelUser';
import express from 'express';
const LoginUser = express.Router();

LoginUser.post('/loginUser', async (req, res) => {
  const { name, password } = req.body;
  const user = await User.findOne({ $and: [{ name }, { password }] });

  if (user !== null) {
    return res.status(200).send({ massege: 'You login. Welcome' });
  } else {
    return res.status(404).send('Incorrect Data');
  }
});

export default LoginUser;
