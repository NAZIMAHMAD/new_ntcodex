import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Contact_us from '../pages/Contact_us';
import Home from '../pages/Home';
import Insight from '../pages/Insight';
import Careers from '../pages/Careers';
import What_We_Do from '../pages/What_We_Do';
import Who_We_Are from '../pages/Who_We_Are'


const AppRoutes = () => {
  return (
    <Routes>
            <Route path="/" element={<Home />} />

      <Route path="/Contact_us" element={<Contact_us />} />
            <Route path="/Insight" element={<Insight />} />
      <Route path="/Careers" element={<Careers/>} />
      <Route path="/What_We_Offer" element={<What_We_Do/>} />
      <Route path="/Who_We_Are" element={<Who_We_Are />} />

    </Routes>
  );
};

export default AppRoutes;
