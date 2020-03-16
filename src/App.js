import React from 'react';
import './App.css';
import Header from './components/Header';
import Content from './components/content/Content';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <Content />
    </div>
  );
}

export default App;
