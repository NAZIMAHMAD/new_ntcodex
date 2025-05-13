import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Contact_us from '../pages/Contact_us';
import Home from '../pages/Home';


const AppRoutes = () => {
  return (
    <Routes>
            <Route path="/" element={<Home />} />

      <Route path="/Contact_us" element={<Contact_us />} />
    </Routes>
  );
};

export default AppRoutes;
