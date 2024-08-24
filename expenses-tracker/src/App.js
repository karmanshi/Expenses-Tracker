import logo from './logo.svg';
import './App.css';
import {  Routes, Route } from "react-router-dom";
import Expanses from './Component/Expanses';
import Profile from './Component/Profile';

function App() {
  return (
    <>
    <Routes>
        <Route path="/" element={<Expanses />}/>
        <Route path="/profile/" element={<Profile/>}/>
         
         
        
      </Routes>
    </>
  );
}

export default App;
