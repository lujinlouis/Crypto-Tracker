

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Alert from './components/Authentication/Alert';
import Header from './components/Header';
import CoinPage from './Pages/CoinPage';
import Homepage from './Pages/Homepage';


function App() {

  return (
    <BrowserRouter>
      <div className='container'>
        <Header />
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='coins/:id' element={<CoinPage />} />
        </Routes>
      </div>
      <Alert />
    </BrowserRouter>
  );
}

export default App;