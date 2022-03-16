import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from 'layouts/Main';
import MinimalLayout from 'layouts/Minimal';

import URLHelpers from 'helper/url';
import Contacts from 'views/Contacts';

const RouteList = () => (
  <Router>
    <Routes>
      <Route element={<MainLayout />}>
        <Route path={URLHelpers.contacts} element={<Contacts />} />
      </Route>
      <Route element={<MinimalLayout />} />
      <Route path="*" element={<Navigate to={URLHelpers.contacts} replace />} />
    </Routes>
  </Router>
);

export default RouteList;
