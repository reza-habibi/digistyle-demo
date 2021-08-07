import express from "express";
import expressAsyncHandler from "express-async-handler";
import Order from "../models/orderModule.js";
import { isAuth } from "../utils.js";

const orderRouter = express.Router();
orderRouter.post(
  "/",
  isAuth,
  expressAsyncHandler(async (req, res) => {
    if (req.body.orderItems.length === 0) {
      res.status(400).send({ message: "سبد خرید شما خالی است . " });
    } else {
      const order = new Order({
        orderItems: req.body.orderItems,
        shippingAddress: req.body.shippingAddress,
        paymentMethod: req.body.paymentMethod,
        itemsPrice: req.body.itemsPrice,
        discount: req.body.discount,
        subPrice: req.body.subPrice,
        user: req.user._id,
      });
      const createdOrder = await order.save();
      res
        .status(201)
        .send({ message: "سفارش شما ثبت شد", order: createdOrder });
    }
  })
);

export default orderRouter;
