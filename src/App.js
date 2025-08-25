import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Auth from './components/auth';
import HomePage from './components/homepage';
import NearbyStoresPage from './components/nearbystorespage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/nearby-stores" element={<NearbyStoresPage />} />
      </Routes>
    </Router>
  );
}

export default App;
