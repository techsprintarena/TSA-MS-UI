import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Components/Header/Header'
import Home from './Pages/Homepage'
import Rewards from './Pages/Rewardspage'
import HowItWorks from './Pages/Howitworkspage';
import Contribution from './Pages/Contributionpage';
import AboutUs from './Pages/Aboutuspage';
import Enroll from './Pages/Enrollpage';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="TSA-MS-UI/dev/" element={<Home />} />
            <Route path="TSA-MS-UI/dev/HIW" element={<HowItWorks />} />
            <Route path="TSA-MS-UI/dev/Contribution" element={<Contribution />} />
            <Route path="TSA-MS-UI/dev/Aboutus" element={<AboutUs/>}/>
            <Route path="TSA-MS-UI/dev/rewards" element={<Rewards />} />
            <Route path="TSA-MS-UI/dev/Enroll" element={<Enroll />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
