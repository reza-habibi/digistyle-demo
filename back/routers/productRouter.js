import express from "express";
import expressAsyncHandler from "express-async-handler";
import { data } from "../data.js";
import Product from "../models/productModels.js";
import { isAdmin, isAuth } from '../utils.js';

const productRouter = express.Router();

productRouter.get(
  "/",
  expressAsyncHandler(async (req, res) => {
    const products = await Product.find({});
    res.send(products);
  })
);

productRouter.get(
  "/seed",
  expressAsyncHandler(async (req, res) => {
    await Product.remove({});

    const createdProducts = await Product.insertMany(data.products);
    res.send({ createdProducts });
  })
);

productRouter.get(
  "/:id",
  expressAsyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (product) {
      res.send(product);
    } else {
      res.status(404).send({ message: " محصول مورد نظر یافت نشد !" });
    }
  })
);

productRouter.post(
  '/',
  isAuth,
  isAdmin,
  expressAsyncHandler(async (req, res) => {
    const product = new Product({
      name: "اسم همینجوری" + Date.now(),
      mainCategory: "دسته بندی اصلی همینجوری",
      mainCategoryEn: "sample main category",
      category: "دسته بندی همینجوری",
      categoryEn: "sample category",
      subCategory: "زیردسته بندی همینجوری",
      subCategoryEn: "sample subCategory",
      image: "/images/products/p1.jpg",
      price: 0,
      discount: "0",
      countInStock: 0,
      brand: "sample brand",
      brandFa: "برند همینجوری",
      rating: 0,
      numReviews: 0,
      description: "توضیحات همینجوری",
    });
    const createdProduct = await product.save();
    res.send({ message: 'محصول ساخته شد', product: createdProduct });
  })
);

export default productRouter;
