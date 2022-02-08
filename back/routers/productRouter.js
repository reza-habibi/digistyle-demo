import express from "express";
import expressAsyncHandler from "express-async-handler";
import { data } from "../data.js";
import Product from "../models/productModels.js";
import { isAdmin, isAuth } from "../utils.js";

const productRouter = express.Router();

productRouter.get(
  "/",
  expressAsyncHandler(async (req, res) => {
    const name = req.query.name || "";
    const mainCategoryEn = req.query.mainCategoryEn || "";
    const brand = req.query.brand || "";
    const categoryEn = req.query.categoryEn || "";
    const subCategoryEn = req.query.subCategoryEn || "";
    const order = req.query.order || "";
    const min =
      req.query.min && Number(req.query.min) !== 0 ? Number(req.query.min) : 0;
    const max =
      req.query.max && Number(req.query.max) !== 0 ? Number(req.query.max) : 0;
    const rating =
      req.query.rating && Number(req.query.rating) !== 0
        ? Number(req.query.rating)
        : 0;
    const mainCategoryEnFilter = mainCategoryEn ? { mainCategoryEn } : {};
    const brandFilter = brand ? { brand } : {};
    const categoryEnFilter = categoryEn ? { categoryEn } : {};
    const subCategoryEnFilter = subCategoryEn ? { subCategoryEn } : {};
    const nameFilter = name ? { name: { $regex: name, $options: "i" } } : {};
    const priceFilter = min && max ? { price: { $gte: min, $lte: max } } : {};
    const ratingFilter = rating ? { rating: { $gte: rating } } : {};
    const sortOrder =
      order === "lowest"
        ? { price: 1 }
        : order === "highest"
        ? { price: -1 }
        : order === "toprated"
        ? { rating: -1 }
        : { _id: -1 };
    const products = await Product.find({
      ...nameFilter,
      ...mainCategoryEnFilter,
      ...categoryEnFilter,
      ...subCategoryEnFilter,
      ...priceFilter,
      ...ratingFilter,
      ...brandFilter,
    }).sort(sortOrder);
    res.send(products);
  })
);

productRouter.get(
  "/categories",
  expressAsyncHandler(async (req, res) => {
    const mainCategories = await Product.find().distinct("mainCategoryEn");
    const categories = await Product.find().distinct("categoryEn");
    const subCategories = await Product.find().distinct("subCategoryEn");

    res.send({ mainCategories, categories, subCategories });
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
  "/",
  isAuth,
  isAdmin,
  expressAsyncHandler(async (req, res) => {
    const product = new Product({
      name: " ",
      mainCategory: " ",
      mainCategoryEn: " ",
      category: " ",
      categoryEn: " ",
      subCategory: " ",
      subCategoryEn: " ",
      image: "/images/products/p1.jpg",
      price: 0,
      discount: "0",
      countInStock: 0,
      brand: " ",
      brandFa: " ",
      rating: 0,
      numReviews: 0,
      description: " ",
    });
    const createdProduct = await product.save();
    res.send({ message: "محصول ساخته شد", product: createdProduct });
  })
);

productRouter.put(
  "/:id",
  isAuth,
  isAdmin,
  expressAsyncHandler(async (req, res) => {
    const productId = req.params.id;
    const product = await Product.findById(productId);
    if (product) {
      product.name = req.body.name;
      product.mainCategory = req.body.mainCategory;
      product.mainCategoryEn = req.body.mainCategoryEn;
      product.category = req.body.category;
      product.categoryEn = req.body.categoryEn;
      product.subCategory = req.body.subCategory;
      product.subCategoryEn = req.body.subCategoryEn;
      product.price = req.body.price;
      product.image = req.body.image;
      product.brandFa = req.body.brandFa;
      product.brand = req.body.brand;
      product.discount = req.body.discount;
      product.countInStock = req.body.countInStock;
      product.description = req.body.description;
      const updatedProduct = await product.save();
      res.send({ message: "Product Updated", product: updatedProduct });
    } else {
      res.status(404).send({ message: "Product Not Found" });
    }
  })
);

productRouter.patch(
  "/:id",
  expressAsyncHandler(async (req, res) => {
    const productId = req.params.id;
    const product = await Product.findById(productId);
    console.log(product);
    if (product) {
      product.countInStock = product.countInStock - req.body.qty;
      const updatedProduct = await product.save();
      res.send({ message: "Product Updated", product: updatedProduct });
    } else {
      res.status(404).send({ message: "Product Not Found" });
    }
  })
);

productRouter.delete(
  "/:id",
  isAuth,
  isAdmin,
  expressAsyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (product) {
      const deleteProduct = await product.remove();
      res.send({ message: "Product Deleted", product: deleteProduct });
    } else {
      res.status(404).send({ message: "Product Not Found" });
    }
  })
);

productRouter.post(
  "/:id/reviews",
  isAuth,
  expressAsyncHandler(async (req, res) => {
    const productId = req.params.id;
    const product = await Product.findById(productId);
    if (product) {
      if (product.reviews.find((x) => x.fullName === req.user.fullName)) {
        return res
          .status(400)
          .send({ message: "You already submitted a review" });
      }
      const review = {
        fullName: req.body.fullName,
        rating: Number(req.body.rating),
        comment: req.body.comment,
        subject: req.body.subject,
      };
      product.reviews.push(review);
      product.numReviews = product.reviews.length;
      product.rating =
        product.reviews.reduce((a, c) => c.rating + a, 0) /
        product.reviews.length;
      const updatedProduct = await product.save();
      res.status(201).send({
        message: "Review Created",
        review: updatedProduct.reviews[updatedProduct.reviews.length - 1],
      });
    } else {
      res.status(404).send({ message: "Product Not Found" });
    }
  })
);

export default productRouter;
