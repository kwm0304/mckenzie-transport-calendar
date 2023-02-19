import React from 'react';
import Header from '../Header';
import { makeStyles } from '@mui/material/styles'
import { Form, Formik } from 'formik'

import {
    Container,
    Grid,
    Typography
} from '@mui/material';
import * as Yup from 'yup';

const useStyles = makeStyles((theme) => ({
    formWrapper: {
        marginTop: theme.spacing(5),
        marginBottom: theme.spacing(8),
    },
}))

//initialstate
const INITIAL_FORM_STATE = {}

const FORM_VALIDATION_SCHEMA = Yup.object.shape({

});

const Example = () => {
    const classes = useStyles();
    return (
        <Grid container>
        <Grid item xs={12}>
            <Header />
        </Grid>
        <Grid item xs={12}>
            <Container maxWidth="md">
                <div className={classes.formWrapper}>
                    <Formik
                    initialValues={{
                        ...INITIAL_FORM_STATE
                    }}
                    validationSchema={FORM_VALIDATION_SCHEMA}
                    onSubmit={(values) => {
                        console.log(values)
                    }}
                    >
                        <Form>

                            <Grid container spacing={2}>

                                <Grid item xs={12}>
                                    <Typography>
                                        Your details
                                    </Typography>
                                </Grid>
                                
                                <Grid item xs={12}>
                                    <Typography>
                                        Address
                                    </Typography>
                                </Grid>

                                <Grid item xs={12}>
                                    <Typography>
                                        Booking info
                                    </Typography>
                                </Grid>

                            </Grid>

                        </Form>
                    </Formik>

                </div>
            </Container>
        </Grid>
        </Grid>
    )
}

export default Example;