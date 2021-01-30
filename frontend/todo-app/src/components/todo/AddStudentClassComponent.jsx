import React, { Component } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Link } from 'react-router-dom'
import moment from 'moment'
import ClassService from '../../api/todo/ClassService.js'
import CourseService from '../../api/todo/CourseService.js'
import AuthenticationService from './AuthenticationService.js'

class AddStudentClass extends Component {

    constructor(props) {
        console.log('constructor')
        super(props)
        this.state = {
            classList: [],
            studentName: ''
        }
        this.addStudentClass = this.addStudentClass.bind(this)
        this.refreshClasses = this.refreshClasses.bind(this)
    }

    //method to push values to ClassService.js and add student to existing course
    addStudentClass(values) {
        ClassService.addStudentClass(this.props.match.params.id, values.studentName)
            .then(
                response => {
                    this.setState({ message: `Adding of class ${values.type} Successful` })
                    this.props.history.push(`/class`)
                }
            )
    }

    //method to get classes from method in ClassService.js
    refreshClasses() {
        let username = AuthenticationService.getLoggedInUserName()
        ClassService.executeClassPathVariableService(username)
            .then(
                response => {
                    //console.log(response);
                    this.setState({ classList: response.data })
                }
            )
    }

    //html render form
    render() {
        console.log('render')
        let studentName = this.state
        this.refreshClasses()
        return (
            <div>
                <h1>Add Student</h1>
                <div className="container">
                <Formik
                        initialValues={studentName}
                        onSubmit={this.onSubmit}
                        validateOnChange={false}
                        validateOnBlur={false}
                        validate={this.addStudentClass}
                        enableReinitialize={true}
                    >
                        {
                            (props) => (
                                <Form>
                                    <ErrorMessage name="description" component="div"
                                        className="alert alert-warning" />
                                    <ErrorMessage name="targetDate" component="div"
                                        className="alert alert-warning" />
                                        <Field component="select" name = "studentName">
                                            <option value="test">test</option>
                                            <option value="sept">sept</option>
                                        </Field>
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


export default AddStudentClass