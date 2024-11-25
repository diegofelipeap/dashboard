import { Routes, Route } from 'react-router-dom';
import Home from './src/pages/Home';
import Dashboard from './src/pages/Dashboard';
import Settings from './src/pages/Settings';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/settings" element={<Settings />} />
    </Routes>
  );
};

export default AppRoutes;
