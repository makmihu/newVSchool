import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/sections/Navbar'
import Profile from './components/pages/Profile'
import Login from './components/pages/Login'
import Issues from './components/pages/Issues'

export default function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route 
          path='/'
          element={<Login />}
        />
        <Route 
          path='/profile'
          element={<Profile />}        />
        <Route 
          path='/Issues'
          element={<Issues />}        />
      </Routes>
    </>
  )
}