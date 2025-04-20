import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RequestPickup from './pages/Customer/RequestPickup';

function App() {
  return (
    <Router>
      <div>
        <div className="h1-heading">Courier App</div>
        <Routes>
          {/* Route for testing the PickForm */}
          <Route path="/" element={<RequestPickup />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;