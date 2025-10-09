

import { Routes, Route } from 'react-router-dom';
import ProfilePage from './pages/ProfilePage.jsx';
import Feedback from './pages/Feedback.jsx';

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<ProfilePage />} />
      <Route path="/feedback" element={<Feedback />} />
    </Routes>
  );
}
