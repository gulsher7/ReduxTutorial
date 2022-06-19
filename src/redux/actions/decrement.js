import store from "../store"
import types from "../types"

const {dispatch} = store;

export function decrement(data){
    dispatch({
        type: types.DECREMENT,
        payload: data
    })  
}