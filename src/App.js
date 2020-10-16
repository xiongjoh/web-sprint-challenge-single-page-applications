import React from "react";
import { Link, Route } from "react-router-dom";
import Home from './components/Home'
import Form from './components/Form'
import Confirmation from './components/Confirmation'
import './App.css'

const App = () => {
  return (
    <>
      <header className="App-header">
        <h1>Lambda Eats</h1>
        <nav>
          <Link className='linker' to="/">Home</Link>
          {/* <Link className='linker' to="/help">Help</Link> */}
        </nav>
      </header>
      <Route exact path='/' component={Home}/>
      <Route path='/pizza' component={Form}/>
    </>
  );
};
export default App;
