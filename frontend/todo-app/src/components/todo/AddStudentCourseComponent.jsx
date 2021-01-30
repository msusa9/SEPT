import React, { Component } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Link } from 'react-router-dom'
import moment from 'moment'
import CourseService from '../../api/todo/CourseService.js'
import AuthenticationService from './AuthenticationService.js'

class AddStudentCourse extends Component {

    constructor(props) {
        console.log('constructor')
        super(props)
        this.state = {
            courseList: [],
            studentName: ''
        }
        this.addStudentCourse = this.addStudentCourse.bind(this)
        this.refreshCourses = this.refreshCourses.bind(this)
    }

    //sends values to method in CourseService.js and adds student to existing course
    addStudentCourse(values) {
        CourseService.addStudentCourse(this.props.match.params.id, values.studentName)
            .then(
                response => {
                    this.setState({ message: `Adding of course ${values.type} Successful` })
                    this.props.history.push(`/course`)
                }
            )
    }

    //refreshes and gets courses from CourseService.js method based on username
    refreshCourses() {
        let username = AuthenticationService.getLoggedInUserName()
        CourseService.executeCoursePathVariableService(username)
            .then(
                response => {
                    //console.log(response);
                    this.setState({ courseList: response.data })
                }
            )
    }

    //html render form
    render() {
        console.log('render')
        let studentName = this.state
        this.refreshCourses()
        return (
            <div>
                <h1>Add Student</h1>
                <div className="container">
                <Formik
                        initialValues={studentName}
                        onSubmit={this.onSubmit}
                        validateOnChange={false}
                        validateOnBlur={false}
                        validate={this.addStudentCourse}
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


export default AddStudentCourse