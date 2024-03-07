import{
    ALL_CATEGORY_FAIL,
    ALL_CATEGORY_REQUEST,
    ALL_CATEGORY_SUCCESS,
}from '../../redux/constants/CategoryConstants.js'

import axios from 'axios'

// action create
export const getAllCategory = () => async (dispatch) => {
    try {
        dispatch({type:ALL_CATEGORY_REQUEST})
        let apilink = '/getcategory' 
        const {data} = await axios.get(apilink)
        console.log(data)
        dispatch({
            type:ALL_CATEGORY_SUCCESS,
            payload:data,
        })
    } catch (error) {
        dispatch({
            type:ALL_CATEGORY_FAIL,
            payload:error.response.data.message,
        })
    }
}
