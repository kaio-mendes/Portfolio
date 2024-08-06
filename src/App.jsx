import './App.css';
import Home from './modules/Home';
import Navbar from './modules/Navbar';
import Projects from './modules/Projects';
import Resume from './modules/Resume';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Erro_404 from './assets/Erro_404'
import Footer from './modules/Footer';

function App() {
  return (
    <>
     <Navbar />
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/resume' element={<Resume />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='*' element={<Erro_404/>} />
      </Routes>
    </BrowserRouter>
    <Footer/>
    </>
  );
}

export default App;
