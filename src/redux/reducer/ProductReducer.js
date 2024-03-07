import {
    ALL_PRODUCT_FAIL,
    ALL_PRODUCT_REQUEST,
    ALL_PRODUCT_SUCCESS,
    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_SUCCESS,
    PRODUCT_DETAILS_FAILED,
    CLEAR_ERRORS,
  } from "../../redux/constants/ProductConstants.js";
  
  export const ProductReducer = (state = { products: [] }, action) => { 
    switch (action.type) {
      case ALL_PRODUCT_REQUEST:
        return {
          loading: true,
          products: [],
        };
  
      case ALL_PRODUCT_SUCCESS:
        return {
          loading: false,
          products: action.payload.data,
        };
  
      case ALL_PRODUCT_FAIL:
        return {
          loading: false,
          error: action.payload,
        };
  
      case CLEAR_ERRORS:
        return {
          ...state,
          error: null,
        };
  
      default:
        return state;
    }
  };
  

  export const ProductdetailReducer = (state = {productdetails: {}}, action ) =>{

    switch(action.type){
      case PRODUCT_DETAILS_REQUEST:
        return{
          loading: true,
          ...state
        }

        case PRODUCT_DETAILS_SUCCESS:
          return{
            loading:false,
            productdetails:action.payload.data
          }

          case PRODUCT_DETAILS_FAILED:
            return{
              loading:false,
              error:action.payload,
            }

            case CLEAR_ERRORS:
              return{
                ...state,
                error:null,
              }

              default:
                return state;
    }

  }