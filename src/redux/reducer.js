import types from "./types";

let init_state = {
    num: 0
}

export function counterReducer(state = init_state, action) {
    switch (action.type) {
        case types.INCREMENT: {
           let data = action.payload
           console.log("Incremnet reducer call",data)
            return { ...state, num: data + 1 }
        }
        case types.DECREMENT: {
            let data = action.payload
            return { ...state, num: data - 1 }
        }
        default:
            return {...state}
    }
}