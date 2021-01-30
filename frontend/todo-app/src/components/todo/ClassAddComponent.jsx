import React, { Component } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import moment from 'moment'
import { Link } from 'react-router-dom'
import ClassService from '../../api/todo/ClassService.js'
import CourseService from '../../api/todo/CourseService.js'
import AuthenticationService from './AuthenticationService.js'

class ClassAddComponent extends Component {

    constructor(props) {
        console.log('constructor')
        super(props)
        this.state = {
            teacher: '',
            type: '',
            classDay: '',
            classTime: '',
            course: ' ',
            courseList: []
        }
        this.addClass = this.addClass.bind(this)
        this.refreshCourses = this.refreshCourses.bind(this)
    }

    //sends values to ClassService.js method that creates a course
    addClass(values) {
        ClassService.addClass(values.teacher,values.type,values.classDay,values.classTime,values.course)
            .then(
                response => {
                    this.setState({ message: `Adding of class ${values.type} Successful` })
                    this.props.history.push(`/class`)
                }
            )
    }

    //refreshes and gets classes from CourseService.js
    refreshCourses(){
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
        let { teacher, type, classDay, classTime, course} = this.state
        this.refreshCourses()
        return (
            <div>
                <h1>Add Class</h1>
                <div className="container">
                <Formik
                        initialValues={{ teacher, type , classDay, classTime, course}}
                        onSubmit={this.onSubmit}
                        validateOnChange={false}
                        validateOnBlur={false}
                        validate={this.addClass}
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
                                        <label>Teacher</label>
                                        <Field className="form-control" type="text" name="teacher" />
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label>Type</label>
                                        <Field className="form-control" type="text" name="type" />
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label>Class Day</label>
                                        <Field component="select" name = "classDay">
                                            <option value="Monday">Monday</option>
                                            <option value="Tuesday">Tuesday</option>
                                            <option value="Wednesday">Wednesday</option>
                                            <option value="Thursday">Thursday</option>
                                            <option value="Friday">Friday</option>
                                        </Field>
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label>Class Time</label>
                                        <Field className="form-control" type="text" name="classTime" />
                                    </fieldset>
                                        <Field component="select" name = "course">
                                            {
                                                this.state.courseList.map(
                                                    courseList =>
                                                        <option value={courseList.name}>{courseList.name}</option>
                                                )
                                            }
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


export default ClassAddComponent