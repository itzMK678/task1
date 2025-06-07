// App.jsx
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './Components/Header' 
import Hero from './Components/Hero'
import './App.css'

export const App = () => {
  return (
     
    <div>
     <Header />
     <Hero />
    </div>
  );
};

export default App; // ✅ Fixed syntax
