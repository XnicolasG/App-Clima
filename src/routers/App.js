import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LogInComponents from './LogInComponents';
import LogOutComponents from './logOutComponents';
import PrivateRoutes from './PrivateRoutes';

import PublicRoutes from './publicRoutes';


function App() {
  const [checking, setChecking] = useState(true)
  const [logged, setLogged] = useState(false)

  

  useEffect(()=>{
    const auth = getAuth();
    onAuthStateChanged(auth, (user) =>{
      if(user?.uid){
        setLogged(true)
      }else{
        setLogged(false)
      }
      setChecking(false)
    })
  }, [setLogged,setChecking ])
  
  if(checking){
    return(
      <h1>Espere por favor..</h1>
    )
  }
  return (
    <BrowserRouter>
      <Routes>
        
        <Route path='/login/*' element={
          <PublicRoutes loginStatus={logged}>
            <LogOutComponents />
          </PublicRoutes>  
            } />

        <Route path='*/' element={
          <PrivateRoutes loginStatus={logged}>
            <LogInComponents />
          </PrivateRoutes>
        } />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
