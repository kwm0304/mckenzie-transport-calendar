import React from 'react';
import { ErrorMessage, Form, Formik, useField, number, string } from 'formik';
import * as Yup from 'yup';
import { Col, Row, Container } from 'react-bootstrap';
import './eventForm.css'
import { Autocomplete } from '@react-google-maps/api'


//Functions for input types
const TextInput = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <>
        <label htmlFor={props.id || props.name}>{label}</label>
        <input className='text-input' {...field} {...props} />
        {/*TOUCHED = VISITED*/}
        {meta.touched && meta.error ? (
            <div className='error'>{meta.error}</div>
        ) : null}
        </>
    );
};

const SelectInput = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <div>
            <label htmlFor={props.id || props.name}>{label}</label>
            <select {...field} {...props} />
            {meta.touched && meta.error ? (
                <div className='error'>{meta.error}</div> 
            ) : null}
        </div>
    );
};

const BooleanInput = ({ children, ...props }) => {
    const [field, meta] = useField({ ...props, type: 'checkbox' });
    return (
        <div>
            <label htmlFor='checkbox-input' label='Paid'>
            <input type='checkbox' {...field} {...props} />
            Paid
            </label>
            {meta.touched && meta.error ? (
                <div className='error'>{meta.error}</div>
            ) : null}
            </div>
    );
};
//taking values, props and state from above functions
const EventForm = () => {
    return (
        <>
        <h1>New Event</h1>
        <Container>
        <Formik
        initialValues={{
            event: [{
            first_name: '',
            last_name: '',
            customer_email: '',
            store_name: '',
            customer_street_address: '',
            customer_city: '',
            customer_state: '',
            price: '',
            payment_method: '',
            paid: false
        }]
        }}
        validationSchema={Yup.object({
            first_name: Yup.string()
                .max(15, 'Must be 15 characters or less')
                .required('Required'),
            last_name: Yup.string()
                .max(20, 'Must be 20 characters or less')
                .required('Required'),
            customer_email: Yup.string()
                .email('Invalid email address')
                .required('Required'),
            store_name: Yup.string(),
            customer_street_address: Yup.string(),
            customer_city: Yup.string(),
            customer_state: Yup.string(),
            price: Yup.number()
                .required('Required')
                .positive('Cannot be a negative number')
                .integer(),
            paid: Yup.boolean()
                .required('Required')
        })}
        //gets called on submit
        onSubmit={(values, { setSubmitting }) => {
            console.log('submit: ', values)
            setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
            }, 500)
        }}
        >
            
            <Form >
                <div className='wrapper1'>
                {/*FIRST NAME*/}
                <TextInput
                className='firstName'
                label='First '
                name='first_name'
                type='text'
                placeholder='First*'
                value={values.first_name}
                />
                </div>
                <div className='wrapper'>
                {/*LAST NAME*/}
                <TextInput
                className='lastName'
                label=' Last '
                name='last_name'
                type='text'
                placeholder='Last*'
                value={values.last_name}
                />
               </div>
               <div className='wrapper'>
                {/*EMAIL*/}
                <TextInput
                className='email'
                label=' Email '
                name='customer_email'
                type='email'
                placeholder='email@email.com*'
                value={values.customer_email}
                />
                </div>
                <div className='wrapper'>
                {/*STORE BOUGHT FROM*/}
                <TextInput
                className='store'
                label=' Store '
                name='store'
                type='text'
                placeholder='High Cotton'
                value={values.store_name}
                />
                </div>
                <div className='wrapper'>
                {/*STREET ADDRESS*/}
                <TextInput
                className='street'
                label=' Street '
                name='customer_street_address'
                type='text'
                placeholder='1234 Fifth St.*'
                value={values.customer_street_address}
                />
                </div>
                <div className='wrapper'>
                {/*CITY*/}
                <TextInput
                className='city'
                label=' City '
                name='customer_city'
                type='text'
                placeholder='Concord'
                value={values.customer_city}
                />
                </div>
                <div className='wrapper'>
                {/*STATE*/}
                <SelectInput label='State ' name='customer_state' className='state' value={values.customer_state}>
                    <option value="">Select state...</option>
                    <option value="NC">NC</option>
                    <option value="SC">SC</option>
                    <option value="AL">AL</option>
                    <option value="AK">AK</option>
                    <option value="AZ">AZ</option>
                    <option value="AR">AR</option>
                    <option value="CA">CA</option>
                    <option value="CO">CO</option>
                    <option value="CT">CT</option>
                    <option value="DE">DE</option>
                    <option value="FL">FL</option>
                    <option value="GA">GA</option>
                    <option value="HI">HI</option>
                    <option value="ID">ID</option>
                    <option value="IL">IL</option>
                    <option value="IN">IN</option>
                    <option value="IA">IA</option>
                    <option value="KS">KS</option>
                    <option value="KY">KY</option>
                    <option value="LA">LA</option>
                    <option value="ME">ME</option>
                    <option value="MD">MD</option>
                    <option value="MA">MA</option>
                    <option value="MI">MI</option>
                    <option value="MN">MN</option>
                    <option value="MS">MS</option>
                    <option value="MO">MO</option>
                    <option value="MT">MT</option>
                    <option value="NE">NE</option>
                    <option value="NV">NV</option>
                    <option value="NH">NH</option>
                    <option value="NJ">NJ</option>
                    <option value="NM">NM</option>
                    <option value="NY">NY</option>
                    <option value="ND">ND</option>
                    <option value="OH">OH</option>
                    <option value="OK">OK</option>
                    <option value="OR">OR</option>
                    <option value="PA">PA</option>
                    <option value="RI">RI</option>
                    <option value="SD">SD</option>
                    <option value="TN">TN</option>
                    <option value="TX">TX</option>
                    <option value="UT">UT</option>
                    <option value="VT">VT</option>
                    <option value="VA">VA</option>
                    <option value="WA">WA</option>
                    <option value="WV">WV</option>
                    <option value="WI">WI</option>
                    <option value="WY">WY</option>
                </SelectInput>
                </div>
                <div className='wrapper'>
                {/*PRICE*/}
                <TextInput
                className='price'
                label='Price '
                name='price'
                type='number'
                placeholder='100*'
                value={values.price}
                />
                </div>
                <div className='paid'>
                {/*PAID?*/}
                <BooleanInput name='paid' className='' value={values.paid}></BooleanInput>
                </div>
                <div className='wrapper'>
                {/*PAYMENT METHOD*/}
                <SelectInput label='Payment Method ' name='payment-method' className='paymentMethod' value={values.payment_method}>
                    <option value='Cash'>Cash</option>
                    <option value='Check'>Check</option>
                    <option value='Stripe'>Stripe</option>
                    <option value='Venmo'>Venmo</option>
                    <option value='PayPal'>PayPal</option>
                    <option value='Apple Pay'>Apple Pay</option>
                    <option value='Google Pay'>Google Pay</option>
                </SelectInput>
                </div>
                {/*SUBMIT BTN*/}
                <button type='submit' className='submitBtn'>Submit</button>
                
            </Form>
            <pre>{JSON.stringify(values, null, 2)}</pre>
        </Formik>
        </Container>
        </>
    );
};

export default EventForm;