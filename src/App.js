import React, {useState} from "react";
import { Link, Route } from "react-router-dom";
import Home from './components/Home'
import Form from './components/Form'
import './App.css'

const initialFormOrder = {
  name: '',
  size: '',
  instructions: '',
  pepperoni: false,
  sausage: false,
  chicken: false,
  cheese: false,
}

const initialReceivedOrders = []

const App = () => {

  const [formValues, setFormValues] = useState(initialFormOrder)
  const [pizzaOrders, setPizzaOrders] = useState(initialReceivedOrders)

  const change = (name, value) => {
    setFormValues({...formValues, [name]:value})
  }

  const submit = () => {

  }

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
      <Route path='/pizza' render={(props) => (
      <Form {...props} values={formValues} change={change} submit={submit}/>
      )}/>
    </>
  );
};
export default App;
