import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Homepage from './Component/Homepage/Home';
import { AuthProvider } from './Component/Homepage/AuthContext';
import UserLogin from './Component/Homepage/Login/UserLogin';
import UserRegister from './Component/Homepage/Login/UserRegister';
import AdminLogin from './Component/Homepage/Login/AdminLogin';
import AdminRegister from './Component/Homepage/Login/AdminRegister';
import TeamMembers from './Component/Homepage/Login/TeamMembers';
import AdminDashboard from './Component/Dashboard/Admin/AdminDashboard';
import UserDashboard from './Component/Dashboard/User/UserDashboard';
import VenuesPage from './Component/Dashboard/Admin/VenuesPage';
import Attendees from './Component/Dashboard/Admin/Attendees';

const App = () => {

  const [events, setEvents] = useState([]);

  const handleEventCreated = (newEvent) => {
    setEvents([...events, newEvent]);
  };
  const handleUpdateEvent = (originalEvent, updatedEvent) => {
    setEvents((prevEvents) =>
      prevEvents.map((event) =>
        event === originalEvent ? { ...updatedEvent } : event
      )
    );
  };

  const handleDeleteEvent = (eventToDelete) => {
    setEvents((prevEvents) => prevEvents.filter((event) => event !== eventToDelete));
  };



  return (
    <AuthProvider>
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/userlogin" element={<UserLogin />} />
        <Route path="/userregister" element={<UserRegister />} />
        <Route path="/adminlogin" element={<AdminLogin />} />
        <Route path="/adminregister" element={<AdminRegister />} />
        <Route path="/Team" element={<TeamMembers />} />
        <Route path="/admindashboard" element={<AdminDashboard />} />
        <Route path="/userdashboard" element={<UserDashboard />} />
        <Route path="/venue-page" element={<VenuesPage />} />
        <Route path="/attendees-page" element={<Attendees />} />

    
      </Routes>
      
     
    </Router>
    </AuthProvider>
  );
};

export default App;
