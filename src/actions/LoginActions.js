import { Types } from "../types/type";
import { getAuth, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth'
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
