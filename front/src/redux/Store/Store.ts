import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { cartReducer } from '../reducers/cartReducer';
import { productDetailsReducer, productListReducer } from '../reducers/productReducer';

interface IReducer{
  productList:any;
  productDetails:any;
}



const initialState = {};
const reducer = combineReducers<IReducer>({
  productList: productListReducer,
  productDetails:productDetailsReducer,
  //@ts-ignore
  cart:cartReducer,
})
//@ts-ignore
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)));
export default store;