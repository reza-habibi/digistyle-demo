import express from "express";
import mongoose from "mongoose";
import productRouter from "./routers/productRouter.js";
import userRouter from "./routers/userRouter.js";
const app = express();

mongoose.connect(process.env.MONGODB_URL || "mongodb://localhost/digi_style", {
  useNewUrlParse: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

app.use("/api/users", userRouter);



app.use((err , req , res , next)=>{
  res.status(500).send({message:err.message});
})

app.use('/api/products' , productRouter)


app.get("/", (req, res) => {
  res.send("Server is ready");
});





// eslint-disable-next-line no-undef
const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`server at http://localhost:${port}`);
});
