import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Checkout from './components/Checkout/Checkout';
import Page404 from './components/Page404/Page404';



function App() {
  return (
    // BEM
    <Router>
        <div className="app">
        <Header />
          <Routes>
                <Route path="/login" element={ <h1>Login Page</h1>} />
                <Route path="/" element={ <Home /> } />
                <Route path="/checkout" element={ <Checkout /> } />
                <Route path="*" element={ <Page404 /> } />
          </Routes>
          
          
        </div>
    </Router>
  );
}

export default App;
 