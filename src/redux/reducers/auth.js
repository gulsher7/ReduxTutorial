import types from "../types"

let init_state = {
    userData: null
}

export default function (state = init_state, action) {
    switch (action.type) {
        case types.LOGIN: {
           let data = action.payload
           console.log("Incremnet reducer call",data)
            return { ...state, userData: data }
        }
        case types.SIGNUP: {
            let data = action.payload
            return { ...state, userData: data }
        }
        default:
            return {...state}
    }
}