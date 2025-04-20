import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RequestPickup from './pages/Customer/RequestPickup';
import MainLayout from './layouts/MainLayout';

function App() {
  return (
    <Router>
      <div>       
        <Routes>
          {/* Route for testing the PickForm */}
          <Route path="/" element={<MainLayout />}>
            <Route exact path="/pickup" element={<RequestPickup />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;