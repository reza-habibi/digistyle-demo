import axios from "axios"
import { CART_ADD_ITEM } from "../constants/cartConstants";

export const addToCart = (productId: any , qty: any ) => async(dispatch: any , getState: any)=>{
    const {data} = await axios.get(`/api/products/${productId}`);
    dispatch({type:CART_ADD_ITEM , payload:{
        name:data.name,
        image:data.image,
        price:data.price,
        discount:data.discount,
        countInStock:data.countInStock,
        product:data._id,
        qty
    }})
}