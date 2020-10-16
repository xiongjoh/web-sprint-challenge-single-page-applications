import * as yup from 'yup'

export default yup.object().shape({
    name: yup.string()
    .required('A name for the order is required')
    .min(2, "Your name must have at least 2 characters"),
    size: yup.string()
    .oneOf(['small', 'medium', 'large', 'ex-large'], 'Please select a pizza size'),
    instructions: yup.string(),
    pepperoni: yup.boolean(),
    sausage: yup.boolean(),
    cheese: yup.boolean(),
    chicken: yup.boolean(),
})