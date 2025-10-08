

import { Routes, Route } from 'react-router-dom';
import ProfilePage from './pages/ProfilePage.jsx';

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<ProfilePage />} />
      {/* <Route path="/about" element={<About />} /> */}
    </Routes>
  );
}
