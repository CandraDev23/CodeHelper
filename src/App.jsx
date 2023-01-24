import { Routes, Route } from 'react-router-dom';
import Home from "./page/Home";
import About from './page/About';
import Contact from './page/Contact';
import Faq from './page/Faq';
// import './App.css';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/faq' element={<Faq />} />
      </Routes>
    </>
  );
}

export default App;
