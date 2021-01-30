import React, { Component } from 'react'
import RegisterService from '../../api/todo/RegisterService.js'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import AuthenticationService from './AuthenticationService.js'
class RegisterComponenet extends Component {

    //Username, Pass, Confirm Pass, Email
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            password: '',
            confirmpass: '',
            email: '',
            hasRegisterFailed: false,
            showSuccessMessage: false
        }
        this.handleBack = this.handleBack.bind(this)
        this.validate = this.validate.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    //redirects back to login via back button
    handleBack(event) {
        this.props.history.push('login');
    }

    //when user presses the register button
    onSubmit(event) {
        console.log(event.username);
        AuthenticationService
            .executeJwtAuthenticationService('asd', 'qwerty')
            .then((response) => {
                AuthenticationService.registerSuccessfulLoginForJwt('asd', response.data.token)
            }).then((response1) => {
                RegisterService.addStudent(event.username, event.password, event.email).then(() => AuthenticationService.logout())
                    .then(
                        (response2) => {
                            this.props.history.push('login')
                        }
                    ).catch(() => {
                        AuthenticationService.logout()
                        alert("something is wrong with our system");
                        this.props.history.push('register');
                    })
            })

    }

    //validation for inputs
    validate(event) {
        let errors = {};
        var regUser = /^([a-zA-Z])*$/;
        if (!event.username) {
            errors.username = 'Please Add a Username';
        } else if (!regUser.test(event.username)) {
            errors.username = 'Invalid username address';
        }

        if (event.password.length < 5) {
            errors.confirmpass = 'Password must be at least 5 characters'
        }
        if (event.password !== event.confirmpass) {
            errors.confirmpass = 'Password must match'
        }
        return errors
    }

    //formik form
    render() {
        let { username, password, confirmpass, email } = this.state
        return (
            <div>
                <h1>Register</h1>
                <div className="container">
                    <Formik
                        initialValues={{ username, password, confirmpass, email }}
                        onSubmit={this.onSubmit}
                        validateOnChange={false}
                        validateOnBlur={false}
                        validate={this.validate}
                        enableReinitialize={true}
                    >
                        {
                            (props) => (
                                <Form>
                                    <ErrorMessage name="username" component="div"
                                        className="alert alert-warning" />
                                    <ErrorMessage name="password" component="div"
                                        className="alert alert-warning" />
                                    <ErrorMessage name="confirmpass" component="div"
                                        className="alert alert-warning" />
                                    <ErrorMessage name="email" component="div"
                                        className="alert alert-warning" />
                                    <fieldset className="form-group">
                                        <label>Username</label>
                                        <Field className="form-control log1" type="text" name="username" required placeholder="User Name" />
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label>Password</label>
                                        <Field className="form-control log1" type="password" name="password" required placeholder="Password at least 5 char" />
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label>Confirm Password</label>
                                        <Field className="form-control log1" id="confirm" type="password" name="confirmpass" required placeholder="Password" />
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label>Email</label>
                                        <Field className="form-control log1" type="email" name="email" required placeholder="Email i.e. a@a.rmit.edu.au" />
                                    </fieldset>
                                    <button className="btn btn-success" type="submit">Register</button>
                                    <button className="btn btn-secondary btn-register" onClick={this.handleBack}>Back</button>
                                </Form>
                            )
                        }
                    </Formik>

                </div>
            </div>
        )
    }
}

export default RegisterComponenet