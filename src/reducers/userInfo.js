const init = {
    userName: "",
    userID: "",
    email: "",
    password: ""
}

export default function userReducer(state = init, action) {
    switch (action.type) {
        case "updateName":
            return {...state, userName: action.payload}
        case "updateID":
            return {...state, userID: action.payload}
        case "updateEmail":
            return {...state, email: action.payload}
        case "updatePassword":
            return {...state, password: action.payload}
    }
    return state
}