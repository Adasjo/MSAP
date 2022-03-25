import { combineReducers } from "redux"

const initialState = {
    counter: 0
}

function counterReducer(state = {value: 0}, action) {
    switch (action.type) {
        case "increment":
            return {...state, value: state.value + 1}
        case "decrement":
            return {...state, value: state.value - 1}
    }
    return state
}

const rootReducer = combineReducers({
    counter: counterReducer
})

export default rootReducer
