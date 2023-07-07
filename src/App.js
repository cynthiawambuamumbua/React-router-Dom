
import './App.css';
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import Products from './products';
import Login from './Login';
import Navbar from './navbar';
import AddProducts from './Add products';


function App() {
  return (
    <div >
      <Navbar/>
      <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login/>}/> 
        <Route path='/products' element={<Products/>}/>
        <Route path='/AddProducts' element={<AddProducts/>}/>
        
      </Routes>
      </BrowserRouter>
     
      
    </div>
  );
}

export default App;
