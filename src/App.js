import logo from './logo.svg';
import './App.css';
import Mainpage from './Component/Mainpage';
import { Route,Routes } from 'react-router-dom';
import Mealinfo from './Component/Mealinfo';
import Mealcards from './Component/Mealcards';
 

function App() { 
  return (
     
    // <Mainpage/>
     
     <Routes>
      <Route path='/' element={<Mainpage/>}/>
      <Route path='/:mealid' element={<Mealinfo/>}/>
     </Routes>
      
  );
}
 
export default App;