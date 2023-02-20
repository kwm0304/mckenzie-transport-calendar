import React from 'react';
import { Form, Formik, Field } from 'formik';
import * as Yup from 'yup';

const PaymentForm = () => {
    return(
    <>
    <h1>Payment</h1>
    <Formik
    initialValues={{ price: '', payment_method: '' }}
    validationSchema={Yup.object({
        price: Yup.number()
            .required('Required'),
        payment_method: Yup.string()
            .required('Required')
    })}
    onSubmit={(values, { setSubmitting }) => {
        setSubmitting(true)
        //make async call to server
        console.log('submit: ', values)
        setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
        }, 500)
    }}
    >

        <Form>
            <Field label='Price*'name='price' className='price' type='number' placeholder='100' />
            <Field label='Payment Method*' name='payment_method'>
            <option value='Cash'>Cash</option>
                    <option value='Check'>Check</option>
                    <option value='Stripe'>Stripe</option>
                    <option value='Venmo'>Venmo</option>
                    <option value='PayPal'>PayPal</option>
                    <option value='Apple Pay'>Apple Pay</option>
                    <option value='Google Pay'>Google Pay</option>
            </Field>
            <button type='submit' className='submitBtn'>Submit</button> 
        </Form>
    </Formik>
    </>
    )
}

export default PaymentForm;