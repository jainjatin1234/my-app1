import axios from 'axios'
import{
    ADD_TO_CART,
    REMOVE_CART_ITEM,
    SAVE_SHIPPING_INFO,
} from '../constants/CartConstant.js'


export const addItemsTocart = (id, quantity) => async(dispatch,getState) =>{
const {data} = await axios.get(`/getproductdetails/${id}`)
console.log(data)

dispatch({
    type:ADD_TO_CART,
    payload:{
        product:data.data._id,
        name:data.data.name,
        price:data.data.price,
        image:data.data.image.url,
        stock:data.data.stock,
        quantity,
    },
})
}

export const removeCartItems = (id) => async (dispatch,getState)=>{
    dispatch({
        type: REMOVE_CART_ITEM,
        payload: id,
    })

    localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems))
}

export const saveShippingInfo = (data) => async (dispatch) =>{
    console.log(data)
    dispatch({
        type:SAVE_SHIPPING_INFO,
        payload:data,
    })

    localStorage.setItem("shppingInfo", JSON.stringify(data))
}