import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { LogIn } from './screens/LogIn';
import { SignUpClient } from './screens/SignUpClient';
import { ForgotPassword } from './screens/ForgotPassword';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LogIn />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUpClient />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Routes>
    </Router>
  );
}

export default App;
