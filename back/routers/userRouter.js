import express from "express";
import { data } from "../data.js";
import User from "../models/userModels.js";
import expressAsyncHandler from "express-async-handler";
data;
const userRouter = express.Router();
userRouter.get(
  "/seed",
  expressAsyncHandler(async (req, res) => {
    await User.remove({})
    const createUsers = await User.insertMany(data.users);
    res.send({ createUsers });
  })
);

export default userRouter;
