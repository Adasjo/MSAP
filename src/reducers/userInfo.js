const init = {
    name: "",
    id: "",
    email: "",
    password: ""
}

export default function userReducer(state = init, action) {
    switch (action.type) {
        case "updateName":
            return {...state, name: action.payload}
        case "updateID":
            return {...state, id: action.payload}
        case "updateEmail":
            return {...state, email: action.payload}
        case "updatePassword":
            return {...state, password: action.payload}
    }
    return state
}