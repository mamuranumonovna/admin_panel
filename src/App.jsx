import { useEffect, useState } from 'react';
import { Route, Routes, useLocation, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import { useGlobalContext } from './context';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Order from './pages/Order';
import Error from './pages/Error';
import Client from './pages/Client';
import SingleClient from './pages/SingleClient';

function App() {
  const { list,isAuthenticated, setAuthenticated,handleLogin } = useGlobalContext(); 

  const location = useLocation();
  const isLoginPage = location.pathname === '/login';
  const isErrorPage = location.pathname === '/*';
  

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('lists');
    if (isLoggedIn) {
      setAuthenticated(true);
    }
  }, [setAuthenticated]);

  

  if (!isAuthenticated && !isLoginPage) {
    return <Navigate to="/login" />;
  }

  return (
    <>
      <div className={`${isLoginPage || isErrorPage ? 'block' : 'flex'}`}>
        {!isLoginPage && <Sidebar />}
        <Routes>
          <Route
            index
            path="/login"
            element={<Login onLogin={handleLogin} />}
          />
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Dashboard />} />
          <Route path="/order" element={<Order />} />
          <Route path="/client" element={<Client />} />
          <Route
            path="/client/:clientId"
            element={<SingleClient />}
          />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </>
  );
  }

export default App;
