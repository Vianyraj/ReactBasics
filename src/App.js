import logo from './logo.svg';
import './App.css';
import'bootstrap/dist/css/bootstrap.css';
import {Routes,Route} from 'react-router'
import {BrowserRouter } from 'react-router-dom'
import About from './HOME/About/About'
import Home from './HOME/Home'
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Navbar from './HOME/NAV/Navbar';
// import UseStateEffect from './HOME/Hooks/UseStateEffect';
import Apps from './HOME/Hooks/Axios/axios'


function App() {
  return (
    <div className="App">
    
     <BrowserRouter>
     <Navbar name="vinay"></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}/>
        <Route path='/about' element={<About></About>}/>
        <Route path='/apps' element={<Apps></Apps>}/>
      </Routes>
      
     </BrowserRouter>
     {/* <UseStateEffect></UseStateEffect> */}
     
    </div>
  );
}

export default App;
