import './App.css';
import Navbar from './component/navbar/navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Shop from './component/shop/shop';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Shop/>} />
        </Routes>
      </BrowserRouter >
    </div>
  );
}

export default App;
