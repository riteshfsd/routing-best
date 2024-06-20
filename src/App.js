import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import JavaScript from './components/JavaScript';
import ReactJS from './components/ReactJS';
function App() {
  return (
    <>
      <BrowserRouter basename='/'>
        <Navbar />
        <Routes>
          {/* <Route path="/" element={<Navbar />}>
          <Route index element={<HomePage />} />
          <Route path="javascript" element={<HomePage />} />
        </Route> */}
          <Route path="/" element={<HomePage />} />
          <Route path="/javascript" element={<JavaScript />} />
          <Route path="/reactjs" element={<ReactJS />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
