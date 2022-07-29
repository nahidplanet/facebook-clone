
import './App.css';
import SingIn from './components/Pages/SingIn/SingIn';
import {Routes,Route,} from "react-router-dom";
import SingUp from './components/Pages/SingUp/SingUp';
import SingIn2 from './components/Pages/SingIn2/SingIn2';
import Home from './components/Pages/Home/Home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/d' element={<SingIn></SingIn>}></Route>
        <Route path='/f' element={<SingIn2></SingIn2>}></Route>
        <Route path='singup' element={<SingUp></SingUp>}></Route>
      </Routes>
    </div>
  );
}

export default App;
