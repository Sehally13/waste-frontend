import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header';
import Home from './components/Home';
import SchedulePickup from './components/SchedulePickup';
import TrackPickup from './components/TrackPickup';
import Reports from './components/Reports';
import Login from './components/Login';
import Register from './components/Register'; // Import Register component
import './components/style.css'; // Adjust the path to style.css
import WasteManager from './components/WasteManager';
import WasteList from './components/wasteList';
import WasteForm from './components/WasteForm';
// import apiService from './components/pages/apiService';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/schedule-pickup" element={<SchedulePickup />} />
        <Route path="/track-pickup" element={<TrackPickup />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} /> {/* Add Register route */}
        <Route path="/wastemanager" element={<WasteManager />} />
        <Route path='/apiservice' element={<apiService />} />
        <Route path='/wastelist' element ={<WasteList/>}/>
        <Route path='/wasteform' element ={<WasteForm/>}/>
      </Routes>
    </Router>
  );
}

export default App;
