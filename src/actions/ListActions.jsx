import { addDoc, collection, deleteDoc, doc, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";
import { Types } from "../types/type";


export const AsyncListActions = (place) => {
    return (dispatch) => {
        const newCity = {
            place
        }
        addDoc(collection(db,'Ciudades'), newCity)
        .then(resp =>{
            dispatch(SyncListActions(newCity));
        })
        .catch(error =>{
            console.log(error);
        })
    }
}

const SyncListActions = (place) => {
    return {
        type: Types.add,
        payload: place
    }
}
export default SyncListActions

// ============ LISTAR ===============

export const AsyncList = () => {
    return async (dispatch) => {
         const querySnapshot = await getDocs(collection(db, 'Ciudades'));
         const ciudades = [];
         querySnapshot.forEach((doc) =>{
            ciudades.push({
                 ...doc.data()
             })
         });
         dispatch(SyncLinst(ciudades))
     }
 }
 
 export const SyncLinst = (ciudades) =>{
     return{
         type:Types.list,
         payload: ciudades
     }
 }

// =============== ELIMINAR ==================

export const AsyncDelete = (place) =>{
    return async (dispatch) =>{
        console.log(place);
    const cityCollection = collection(db, 'Ciudades');
    const q = query(cityCollection, where('place', '==', place));

    const querySnapshots = await getDocs(q);
    querySnapshots.forEach((coll)=>{
        deleteDoc(doc(db, 'Ciudades', coll.id))
    .then(res=>{
        dispatch(SyncDelete(place))
    })
    })
}
}

export const SyncDelete = (place) =>{
    return{
        type:Types.delete,
        payload: place
    }
}