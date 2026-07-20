import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Components/Header/Header'
import Home from './Pages/Homepage'

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
