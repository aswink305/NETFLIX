import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Caroasel from './components/Caroasel';
import Movieoverflows from './components/Movieoverflows';
import Home from './pages/Home';
import Movieviewing from './components/Movieviewing';
import { useState } from 'react';
import Slider from './components/Slider';
import Buttonsclick from './components/Buttonsclick';

function App() {
  const [idData, setidData] = useState()

  function movieid  (id)  {
    setidData(id)
  }

  return (
    <>

      <BrowserRouter>

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/navbar" element={<Navbar />}></Route>
          <Route path="/carousel" element={<Caroasel />}></Route>
          <Route path="/movieview" element={<Movieviewing />}></Route>
          <Route path="/movierow" element={<Movieoverflows />}></Route>
          <Route path="/slider" element={<Slider />}></Route>
          <Route path="/buttonsclick/:name" element={<Buttonsclick />}></Route>






        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
