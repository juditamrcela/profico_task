import React from 'react';
import Header from './components/Header/Header';
import HomePage from './components/Homepage/HomePage';
import { BrowserRouter ,Routes, Route} from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar';
import './styles/index.scss';

function App() {
  return (
    
    <div >
      <Header></Header>
      
      <BrowserRouter>
      <Routes>
        <Route  path="/" element={<HomePage/>}></Route>
        
        <Route path="/:id" element={<HomePage/>}></Route>

      </Routes>
      </BrowserRouter>
      
      
      
    </div>
  );
}

export default App;
