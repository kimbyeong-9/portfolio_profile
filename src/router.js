import React from 'react';
import { Routes, Route } from 'react-router-dom';

function Home() {
  return <h2>홈</h2>;
}

function About() {
  return <h2>소개</h2>;
}

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}
