import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './component/navbar/navbar.jsx'
import Showitem from './pages/showitem.jsx';
import Updateitem from './pages/updateitem.jsx';
import Additem from './pages/Additem.jsx';
import Login from './pages/login.jsx'
import Privateoutlet from './pages/outlet.jsx';




function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route  element={<Privateoutlet />}>
            <Route path='/' element={<Showitem />} />
            <Route path='/additem' element={<Additem />} />
            <Route path='/updateitem/:id' element={<Updateitem />} />
          </Route>
          <Route path='/login' element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div >
  );
}

export default App;
