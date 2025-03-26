import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { LogIn } from './screens/LogIn';
import { SignUpClient } from './screens/SignUpClient';
import { ForgotPassword } from './screens/ForgotPassword';
import { ResetPassword } from './screens/ResetPassword';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ResetPassword />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUpClient />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password/:token" element={<ResetPassword />} />
      </Routes>
    </Router>
  );
}

export default App;
