import { Types } from "../types/type";
import { getAuth, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'
import { google } from "../firebase/firebaseConfig";

// ================ Login Manual ========================
export const loginEmailPassword = (email, password) => {

    return (dispatch) => {

        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then(({ user }) => {
                dispatch(
                    loginSync(user.uid, user.displayname)
                )
                console.log('Bienvenid@');
                
            })
            .catch(e => {
                console.log(e);
                console.log('El usuario no existe');
            })
    }
}

// =============== LOGIN con Google============
export const loginGoogle = () => {
    return (dispatch) => {
        const auth = getAuth();
        signInWithPopup(auth, google)
            .then(({ user }) => {
                dispatch(loginSync(user.uid, user.displayName))
            })
            .catch(e => {
                console.log(e);
            })
    }
}

export const loginSync = (id, displayname) => {
    return {
        type: Types.login,
        payload: {
            id,
            displayname
        }
    }
}
// ========== LOGOUT ============
export const logoutAsync=()=>{
    return(dispatch)=>{
        const auth = getAuth();
        signOut(auth)
        .then((user)=>{
            console.log("cerrar sesion");
            console.log(user);
            dispatch(actionLogout())
        })
        .catch(error =>{
            console.log(error);
        })
        
    }
}

export const actionLogout = ()=>{
    return{
        type:Types.logout
    }
}