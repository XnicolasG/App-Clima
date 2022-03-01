import { Types } from "../types/type";

const initialState = {
    cities:[]
}
export const MyListReducer = (state = initialState, action)=>{
    switch (action.type) {
        case Types.add:
            return{
                cities:[action.payload]
            }
        case Types.list:
            return{
                cities:[...action.payload]
            }
        case Types.delete:
            return{
                cities: state.cities.filter(cit => cit.place !== action.payload)
            }
        
        default:
            return state
    }
}