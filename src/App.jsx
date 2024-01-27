import { useEffect, useState } from 'react';
import './App.css';
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import { useGlobalContext } from './context';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Order from './pages/Order';
import Error from './pages/Error';

function App() {
  const { list } = useGlobalContext();
  
  const location = useLocation();
  const isLoginPage = location.pathname === '/login';
  const isErrorPage = location.pathname === '/*';

  useEffect(() => {
    localStorage.setItem('lists', JSON.stringify(list));
  }, [list]);

  return (
    <>
    <div  className= {`${isLoginPage||isErrorPage ? 'block' : 'flex'}`}>
    {!isLoginPage && <Sidebar />}
      
      <Routes>
        <Route index path='/login' element={<Login />} />
        <Route path='/home' element={!isLoginPage && <Home />} />
        <Route path='/' element={<Dashboard/>}/>
        <Route path='/order' element={<Order/>}/>
        <Route path='*' element={<Error/>}/>
      </Routes>
      
    
    </div>
      
    </>
  );
}

export default App;
