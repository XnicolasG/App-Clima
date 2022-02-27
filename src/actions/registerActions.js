import { createUserWithEmailAndPassword, getAuth, updateProfile } from "firebase/auth";
import { Types } from "../types/type";

export const registerAsync = (email,password,name) => {
    return(dispatch) =>{
        const auth = getAuth();
        createUserWithEmailAndPassword(auth,email,password)
        .then(async({user})=>{
            await updateProfile(auth.currentUser, {displayName: name})

            dispatch(registerSync(user.email,user.uid,user.displayName))
            console.log(user);
        })
        .catch(e=>{
            console.log(e);
        })
    }
}

export const registerSync = (email,password,name) =>{
    return{
        type: Types.register,
        payload:{
            email,
            password,
            name
        }
    }
}