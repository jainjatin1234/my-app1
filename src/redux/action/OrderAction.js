import {
  CREATE_ORDER_REQUEST,
  CREATE_ORDER_SUCCESS,
  CREATE_ORDER_FAIL,
} from "../constants/OrderConstant";

import axiox from 'axios'
import axios from "axios";

export const createOrder = (order) => async(dispatch) => {
    try{
        dispatch({type: CREATE_ORDER_REQUEST})

        const config = {
            headers:{
                "Content-Type": "application/json",
            },
        }
        const {data} = await axios.post("/createorder", order, config)

        dispatch({type: CREATE_ORDER_SUCCESS, payload: data})
    }catch(error){
        dispatch({
            type:CREATE_ORDER_FAIL,
            payload:error.response.data.message,
        })
    }
}