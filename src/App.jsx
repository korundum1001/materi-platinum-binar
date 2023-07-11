import React, {useState} from 'react'
import './App.css'
import {BrowserRouter, Routes, Route, Link, useRoutes} from 'react-router-dom';
import Homepage from './pages/Homepages';
import Discovery from './pages/Discovery';
import Register from './pages/Register';
import Login from './pages/Login';
import ProtectedRoute from './components/ProtectedRoutes';
import AdminLogin from './admin/pages/AdminLogin';
import AdminDashboard from './admin/pages/AdminDashboard';
import AdminListCars from './admin/pages/AdminListCars';
import AdminEditCars from './admin/pages/AdminEditCars';
import AdminAddCars from './admin/pages/AdminAddCars';

function App() {
  const [token, setToken] = useState()
  let element = useRoutes([
    {
      path: "/", element : <Homepage/> 
    },
    {
      path: "/discovery", element: <ProtectedRoute><Discovery/></ProtectedRoute>
    },
    {
      path: "/register", element: <Register/>
    },
    {
      path: "/login", element: <Login/>
    },

    {
      path:"/admin_login", element: <AdminLogin/>
    },
    {
      path:"/admin_dashboard", element: <AdminDashboard/>
    },
    {
      path:"/admin_listcars", element: <AdminListCars/>
    },
    {
      path:"/admin_editcars/:id", element: <AdminEditCars/>
    },
    {
      path:"/admin_addcars", element: <AdminAddCars/>
    }

  ])
  return element;
  
}

export default App
