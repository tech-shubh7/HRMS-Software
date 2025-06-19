import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './Components/Dashboard'
import Login from './Components/Login';
import Register from './Components/Signup';
import EmployeeTurnover from './Components/EmployeeTurnover';
import EmployeeManage from './Components/EmployeeManage';

function App() {
  return (
    <div>
       <Router>
         <Routes>
          <Route path="/dashboard" element={ <Dashboard/>}/> 
          <Route path="/" element={ <Register/>}/> 
          <Route path="/login" element={ <Login/>}/> 
          <Route path="/employees" element={<EmployeeManage/>} />
          </Routes>
      </Router>
    </div>
  )
}

export default App
