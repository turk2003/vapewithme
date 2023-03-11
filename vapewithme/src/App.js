import './App.css';
import Navbar from './component/search';
import Footer from './component/footer';
import Slider from './component/page/slider';
import { BrowserRouter as Router,Switch,Route ,Routes} from 'react-router-dom';
import Home from './component/page/home';
import Produce from './component/page/produce';
import Shop from './component/page/shop';
import Login from './component/page/login';


function App() {
  return (
    <div>
      <Router>
        <Navbar/>
        <Routes>
        <Route path='/' element = {<Home/>} exact />
        <Route path='/Produce' element = {<Produce/>}  />
        <Route path='/Shop' element = {<Shop/>}  />
        <Route path='/Login' element = {<Login/>}  />
        </Routes>
        
        <Footer/>
      </Router>
      
    </div>

    
  );
}

export default App;
