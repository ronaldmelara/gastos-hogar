import React from 'react';
import { Routes, Route } from "react-router-dom";
import { Navbar } from "../components/navbar/Navbar"
import { HomePage } from '../pages/HomePage'; 
import { LoginPage } from '../pages/LoginPage';
import { RegisterPage } from '../pages/RegisterPage';
import { DashboardPage } from '../pages/DashboardPage';
import { PrivateRoute } from './PrivateRoute';

export default function AppRouter (){
  return (
   <>
   <Routes>
        <Route path='/' element={<Navbar />}>
            <Route path="login" index element={<LoginPage />} />
            <Route path='register' element={ <RegisterPage /> } />
            <Route path='dashboard' element={
                <PrivateRoute>
                    <DashboardPage/>
                </PrivateRoute>
            }/>
        </Route>
   </Routes>
   </>
  )
}
