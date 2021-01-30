import React, { Component } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Link } from 'react-router-dom'
import CourseService from '../../api/todo/CourseService.js'
import AuthenticationService from './AuthenticationService.js'

class CourseAddComponent extends Component {

    constructor(props) {
        console.log('constructor')
        super(props)
        this.state = {
            names: '',
            description: ''
        }
        this.addCourse = this.addCourse.bind(this)
    }

    //method to send values to CourseService.js which creates a new course
    addCourse(values) {
        CourseService.addCourse(values.name,values.description)
            .then(
                response => {
                    this.setState({ message: `Adding of course ${values.name} Successful` })
                    this.props.history.push(`/course`)
                }
            )
    }

    //html render form
    render() {
        console.log('render')
        let { names, description } = this.state
        return (
            <div>
                <h1>Add Course</h1>
                <div className="container">
                <Formik
                        initialValues={{ names, description }}
                        onSubmit={this.onSubmit}
                        validateOnChange={false}
                        validateOnBlur={false}
                        validate={this.addCourse}
                        enableReinitialize={true}
                    >
                        {
                            (props) => (
                                <Form>
                                    <ErrorMessage name="description" component="div"
                                        className="alert alert-warning" />
                                    <ErrorMessage name="targetDate" component="div"
                                        className="alert alert-warning" />
                                    <fieldset className="form-group">
                                        <label>Name</label>
                                        <Field className="form-control" type="text" name="name" />
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label>Description</label>
                                        <Field className="form-control" type="text" name="description" />
                                    </fieldset>
                                    <button className="btn btn-success" type="submit">Save</button>
                                </Form>
                            )
                        }
                    </Formik>
                </div>
            </div>
        )
    }

}


export default CourseAddComponent