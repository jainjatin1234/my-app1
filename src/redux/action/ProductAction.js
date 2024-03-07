import {
  ALL_PRODUCT_REQUEST,
  ALL_PRODUCT_SUCCESS,
  ALL_PRODUCT_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_FAILED,



} from "../../redux/constants/ProductConstants.js";

import axios from "axios";

// action create
export const getAllProduct = () => async (dispatch) => {
  try {
    dispatch({
      type: ALL_PRODUCT_REQUEST,
    });
    let apilink = "/getproduct";
    const { data } = await axios.get(apilink);
    console.log(data);
    dispatch({
      type: ALL_PRODUCT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ALL_PRODUCT_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const getProductDetail = (id) => async (dispatch) =>{
  try {
    dispatch({type:PRODUCT_DETAILS_REQUEST})
    const {data} = await axios.get(`/getproductdetails/${id}`)

    console.log(data)

    dispatch({
      type:PRODUCT_DETAILS_SUCCESS,
      payload:data,
    })


    
  } catch (error) {
    dispatch({
      type:PRODUCT_DETAILS_FAILED,
      payload:error.response.data.message,
    })
  }
}
