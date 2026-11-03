import React from 'react'
import './App.css'
import NavbarCompo from './components/NavbarCompo'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Hero from './components/Hero';
import Home from './pages/Home'
import Festivals from './pages/Festivals'
import Heritage from './pages/Heritage'
import Food from './pages/Food'
import Tourism from './pages/Tourism'
import AdminDashboard from './pages/AdminDashboard'
import Login from './pages/Login'
import Footer from './components/Footer'
import IndiaMap from './components/IndiaMap'
import StateDetails from './pages/StateDetails'
import Register from './pages/Register'
import UserProfile from './pages/UserProfile'





function App() {
  return (
    <div>
      <NavbarCompo />
      {/* <Hero/> */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/festivals" element={<Festivals />} />
        <Route path="/heritage" element={<Heritage />} />
        <Route path="/food" element={<Food />} />
        <Route path="/tourism" element={<Tourism />} />
        <Route path="/india-map" element={<IndiaMap />} />
        <Route path="/state/:id" element={<StateDetails />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />}/>
        <Route path="/profile" element={<UserProfile />}/>
        <Route path="/admin" element={<AdminDashboard />}/></Routes>

      <Footer />
    </div>
  )
}

export default App
