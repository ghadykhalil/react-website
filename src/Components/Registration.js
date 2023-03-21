import "../Styles/Registration.css";
import { Formik, Form, Field, ErrorMessage } from "formik";

const Registration = () => {

    return (

        <div className="container">
            <Formik
                initialValues={{ name: '', email: '', password: '', confPass: '' }}
                validate={(values) => {
                    const errors = {};

                    if (!values.name) {
                        errors.name = '*Name is required';
                    }
                    if (!values.email) {
                        errors.email = '*Email is required';
                    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                        errors.email = '*Invalid email address';
                    }
                    if (!values.password) {
                        errors.password = '*Password is required';
                    }else if(!/^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{7,}$/.test(values.password)){
                        errors.password="*Password should include 7 characters, a capital letter,a number and a special character";
                    }

                    if (!values.confPass) {
                        errors.confPass = '*Confirm Password is required';
                    } else if (values.password !== values.confPass) {
                        errors.confPass = '*Passwords do not match';
                    }
                    return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 400);
                }}
            >
                {({ isSubmitting }) => (
                    <Form>
                        <div className="register">

                            <label htmlFor="name">Name:</label>
                            <div className="box">
                                <Field
                                    name="name"
                                    type="text"
                                    placeholder="Enter your name..."
                                    required
                                />
                                <ErrorMessage name="name" component="div" className="error" />
                            </div>
                            <label htmlFor="email">Email:</label>
                            <div className="box">
                                <Field
                                    name="email"
                                    type="email"
                                    placeholder="Enter a valid email..."
                                    required />
                                <ErrorMessage name="email" component="div" className="error" />
                            </div>
                            <label htmlFor="password">Password:</label>
                            <div className="box">
                                <Field
                                    name="password"
                                    type="password"
                                    placeholder="Enter a strong password..."
                                    required />
                                <ErrorMessage name="password" component="div" className="error" />
                            </div>
                            <label htmlFor="confPass">Confirm Password:</label>
                            <div className="box">
                                <Field
                                    name="confPass"
                                    type="password"
                                    placeholder="Confirm your password..."
                                    required
                                />
                                <ErrorMessage name="confPass" component="div" className="error" />
                            </div>
                            <button id="submit" type="submit" disabled={isSubmitting}>
                                {isSubmitting ? 'Submitting' : 'Register'}
                            </button>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default Registration;