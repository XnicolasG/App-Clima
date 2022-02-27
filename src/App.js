import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import SingIn from './components/SingIn';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SingIn />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
