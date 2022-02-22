import './App.css';

import Header from './component/common/Header';
import Home from './Home';
import Login from './component/member/Login';
import Side from './component/common/Side';
import Footer from './component/common/Footer';


import {Route, Routes, BrowserRouter} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div id='container'>
          <Header />
          <Side />
          <div>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/member/login" element={<Login />} />
              
              
            </Routes>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
