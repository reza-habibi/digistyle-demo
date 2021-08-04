import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    mainCategory: { type: String, required: true },
    mainCategoryEn: { type: String, required: true },
    category: { type: String, required: true },
    categoryEn: { type: String, required: true },
    subCategory: { type: String, required: true },
    subCategoryEn: { type: String, required: false },
    image: { type: String, required: true },
    price: { type: Number, required: true },
    discount: { type: String, required: true },
    countInStock: { type: Number, required: true },
    brand: { type: String, required: true },
    brandFa: { type: String, required: true },
    rating: { type: Number, required: true },
    numReviews: { type: Number, required: true },
    description: { type: String, required: true },
  },
  { timestamp: true }
);


const Product = mongoose.model('Product' , productSchema);

export default Product