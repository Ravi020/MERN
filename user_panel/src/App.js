import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './Component/MainPage';
import Navbar from './Shared/Navbar';
import Footer from './Shared/Footer';
function App() {
  return (

    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path='/' element={<Footer/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}


export default App;
