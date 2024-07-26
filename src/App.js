import './App.css';
import Banner from './Components/Banner';
import Navbar from './Components/Navbar';
import Service from './Components/Service';
import Cart from './Components/Cart'
import ProductPage from './Pages/ProductPage'
import About from './Components/About'
import Map from './Components/Map';
import Foot from './Components/Foot';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import TablePage from './Pages/TablePage';
import { animateScroll } from 'react-scroll';
import HomePage from './Pages/HomePage';
import RoomPage from './Pages/RoomPage';
import CheckOutPage from './Components/CheckOutPage';
import CardPayment from './Components/CardPayment';


function App() {

  return (
    <Router>
      <div className="App">
        <Navbar />
        {/* <RoomPage /> */}
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path="/menu" element={< ProductPage />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path='/tablepage' element={< TablePage />}/>
          <Route path='/roomPage' element={<RoomPage />}/>
          <Route path='/checkOutPage' element={<CheckOutPage />}/>
          <Route path='/cardPayment' element={<CardPayment />}/>

        </Routes>
        <Foot />
      </div>
    </Router>
  );
}

export default App;
