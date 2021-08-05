import express from "express";
import { data } from "../data.js";
import bcrypt from 'bcryptjs'
import User from "../models/userModels.js";
import expressAsyncHandler from "express-async-handler";
import { generateToken } from '../utils.js';

data;
const userRouter = express.Router();
userRouter.get(
  "/seed",
  expressAsyncHandler(async (req, res) => {
    await User.remove({});
    const createUsers = await User.insertMany(data.users);
    res.send({ createUsers });
  })
);

userRouter.post(
  '/signin',
  expressAsyncHandler(async (req, res) => {
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      if (bcrypt.compareSync(req.body.password, user.password)) {
        res.send({
          _id: user._id,
          name: user.name,
          email: user.email,
          isAdmin: user.isAdmin,
          token: generateToken(user),
        });
        return;
      }
    }
    res
      .status(401)
      .send({ message: "ایمیل یا رمزعبور وارد شده صحیح نمی باشد." });
  })
);

export default userRouter;
