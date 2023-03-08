
import './styles/main.css';
import Matches from "./Screens/Matches";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Games from './Screens/Games';
import Header from './components/Header';
import Login from './Screens/Login';
import Register from './Screens/Register';


function App() {
  return (
    <>
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
      <Header />
      <Games />
      <Matches />
      <Login />
      <Register />
    </div>
      
    </>
  )
}

export default App
