import { Types } from "../types/type";

export const registerReducer = (state = {}, action) => {
    switch (action.type) {
        case Types.register:
            return{
                email: action.payload.email,
                password: action.payload.password,
                name: action.payload.name
            }

        default:
            return state
    }
}