import { Route, Routes } from 'react-router-dom'; // ✅ Corrected import
import Header from './Components/Header'; 
import Hero from './Components/Hero';
import Team from './Components/Team';
import './App.css';

export const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/team" element={<Team />} /> 
      </Routes>
    </div>
  );
};

export default App;
