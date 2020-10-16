import React, {useState, useEffect} from "react";
import { Link, Route } from "react-router-dom";
import Home from './components/Home'
import Form from './components/Form'
import './App.css'
import * as yup from 'yup'
import schema from './validation/formSchema'

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
const initialDisabled = true

const App = () => {

  const [formValues, setFormValues] = useState(initialFormOrder)
  const [pizzaOrders, setPizzaOrders] = useState(initialReceivedOrders)
  const [disabled, setDisabled] = useState(initialDisabled)


  // Event Handler
  const change = (name, value) => {
    setFormValues({...formValues, [name]:value})
  }

  const submit = () => {
    const newOrder = {
      name: formValues.name.trim(),
      size: formValues.size,
      instructions: formValues.instructions.trim(),
      pepperoni: formValues.pepperoni,
      sausage: formValues.sausage,
      cheese: formValues.cheese,
      chicken: formValues.chicken,
    }
    setPizzaOrders([newOrder, ...pizzaOrders])

    setFormValues(initialFormOrder)
  }


  // Side Effects 

  useEffect(() => {
    console.log(pizzaOrders)
  },[pizzaOrders])

  useEffect(() => {
    schema.isValid(formValues).then(valid => {
      setDisabled(!valid)
    })
  },[formValues])

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
      <Form {...props} values={formValues} change={change} submit={submit} disabled={disabled}/>
      )}/>
    </>
  );
};
export default App;
