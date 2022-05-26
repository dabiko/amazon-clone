import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Checkout from './components/Checkout/Checkout';
import Page404 from './components/Page404/Page404';
import Login from './components/Login/Login';



function App() {
  return (
    // BEM
    <Router>
        <div className="app">
          <Routes>
                <Route path="/login" element={ <Login />} />
                <Route path="/" element={<><Header /> <Home /> </>} />
                <Route path="/checkout" element={<><Header /> <Checkout /> </>} />
                <Route path="*" element={ <Page404 /> } />
          </Routes>
          
          
        </div>
    </Router>
  );
}

export default App;
 