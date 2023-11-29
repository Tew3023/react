import './App.css';
import { Routes, Route } from "react-router-dom";


import Appheader from './componant/App-header';


import Homepage from './page/homepage';

import Sell from './page/sell';

function App() {
  return (
    <div className='App'>
      <div className='header'>
        <Appheader />
      </div>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/sell' element={<Sell />} />
      </Routes>
    </div> 
  );
}

export default App;
