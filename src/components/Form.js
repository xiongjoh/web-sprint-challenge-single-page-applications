import React from 'react'
import {Link} from 'react-router-dom'

export default function Form(props) {
    return (
        <form className="pizza-form">
            <div className="pizza-list">
            <label>Name: 
                <input/>
            </label>
            <label>Pizza Size:
                <select>
                    <option>--Select Pizza Size--</option>
                    <option>Small 10"</option>
                    <option>Medium 12"</option>
                    <option>Large 14"</option>
                    <option>Ex-Large 18"</option>
                </select>
            </label>

            <label>Special Instructions:
                <input type="text"/>
            </label>

            </div>
            <div className="pizza-list">
            <p>Toppings:</p>
            <label>Pepperoni
                <input type="checkbox"/>
            </label>
            <label>Sausage
                <input type="checkbox"/>
            </label>
            <label>Chicken
                <input type="checkbox"/>
            </label>
            <label>Cheese
                <input type="checkbox"/>
            </label>
            </div>
            

        </form>
    )
}