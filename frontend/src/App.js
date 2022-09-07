import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import Signup from './pages/SignupPage/Signup';

function App() {
  return (
    // <>yoo</>
    <BrowserRouter>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/sign-up" element={Signup} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
