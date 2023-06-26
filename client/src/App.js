import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Header from './components/header/Header';
import Home from "./pages/home"
import List from "./pages/list"
import Hotel from "./pages/hotel"
import Login from "./pages/login"
function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Home />}/>
    <Route path="/hotels" element={<List/>}/>
    <Route path="/hotels/:id" element={<Hotel/>}/>
    <Route path="/login" element={<Login/>}/>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
