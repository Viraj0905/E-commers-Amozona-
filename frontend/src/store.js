import data from './data';
import {applyMiddleware, createStore,compose, combineReducers} from 'redux'
import thunk from 'redux-thunk';
import { productListReducer,poductDetailsReducer } from './reducer/poductReducers';
const intialState={};
// const reducer=(state,action)=>{
//     return{
//         products:data.products
//     };
// }
//After creating productReducer.js
const reducer=combineReducers({
    productList:productListReducer,
    productDetails:poductDetailsReducer,
})
const composeEnhancer=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||compose
const store=createStore(
    reducer,
    intialState,
    composeEnhancer(applyMiddleware(thunk))
    );

export default store;
