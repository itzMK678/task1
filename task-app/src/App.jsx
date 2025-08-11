import { Route, Routes } from 'react-router-dom'; // ✅ Corrected import
import Header from './Components/Header'; 
import Hero from './Components/Hero';
import Tasks from './Components/Tasks';
import './App.css';

export const App = () => {
  return (
    <div>
      <Header />
      <Routes>
       
        <Route path="/" element={<Hero />} />
         <Route path = "/Tasks" element ={<Tasks/>} /> 
      </Routes>
    </div>
  );
};

export default App;
