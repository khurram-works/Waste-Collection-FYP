import React from 'react'
import './App.css'
import SmartWastePlatform from './pages/landingpage'
import SmartWasteLogin from './pages/loginpage'
import SmartWasteRegister from './pages/signuppage'
import SmartWasteCitizenDashboard from './pages/citizendashboard'
import SmartWasteWorkerDashboard from './pages/workerdashboard'
import AdminDashboard from './pages/admindashboard'
import { Routes, Route } from "react-router-dom";

function App() {
  

  return (
    <Routes>
      <Route path="/" element={<SmartWastePlatform/>} />
      <Route path="/login" element={<SmartWasteLogin/>} />
      <Route path="/register" element={<SmartWasteRegister/>} />
      <Route path="/citizen-dashboard" element={<SmartWasteCitizenDashboard/>} />
      <Route path="/worker-dashboard" element={<SmartWasteWorkerDashboard/>} />
      <Route path="/admin-dashboard" element={<AdminDashboard/>} />
    </Routes>
  )
}

export default App
