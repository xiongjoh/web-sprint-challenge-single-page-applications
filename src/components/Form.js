import React from 'react'

export default function Form(props) {
    const {values, change, submit, disabled, errors} = props


    // Event Helpers
    const onSubmit = (evt) => {
        evt.preventDefault()
        submit()
    }
    const onChange = (evt) => {
        const {name, value, type, checked} = evt.target
        const valueToUse = type === "checkbox" ? checked : value
        change(name, valueToUse)
    }

    return (
        <form className="pizza-form" onSubmit={onSubmit}>
            <div className="errors">
                <p>{errors.name}</p>
                <p>{errors.size}</p>
            </div>
            <div className="pizza-list">
            <label>Name: 
                <input
                type='text'
                name='name'
                onChange={onChange}
                value={values.name}
                />
            </label>
            <label>Pizza Size:
                <select
                onChange={onChange}
                value={values.size}
                name='size'
                >
                    <option value=''>--Select Pizza Size--</option>
                    <option value='small'>Small 10"</option>
                    <option value='medium'>Medium 12"</option>
                    <option value='large'>Large 14"</option>
                    <option value='ex-large'>Ex-Large 18"</option>
                </select>
            </label>

            <label>Special Instructions:
                <input 
                type="text"
                name="instructions"
                onChange={onChange}
                value={values.instructions}
                />
            </label>

            </div>
            <div className="pizza-list">
            <p>Toppings:</p>
            <label>Pepperoni
                <input 
                type="checkbox"
                name="pepperoni"
                checked={values.pepperoni}
                onChange={onChange}
                />
            </label>
            <label>Sausage
                <input 
                type="checkbox"
                name="sausage"
                checked={values.sausage}
                onChange={onChange}
                />
            </label>
            <label>Chicken
                <input 
                type="checkbox"
                name="chicken"
                checked={values.chicken}
                onChange={onChange}
                />
            </label>
            <label>Cheese
                <input 
                type="checkbox"
                name="cheese"
                checked={values.cheese}
                onChange={onChange}
                />
            </label>
            </div>

            <button disabled={disabled}>Order</button>
        </form>
    )
}