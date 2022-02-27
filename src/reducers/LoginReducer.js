import { Types } from "../types/type";

export const loginReducer = (state = {}, action) => {
    switch (action.type) {
        case Types.login:
            return{
                id: action.payload.id,
                name: action.payload.displayname
            }

        default:
            return state
    }
}