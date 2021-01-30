import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'
import CourseService from '../../api/todo/CourseService.js'
import AuthenticationService from './AuthenticationService.js'

class StudentCourseComponent extends Component {

    constructor(props) {
        console.log('constructor')
        super(props)
        this.state = {
            courseList: []
        }
        this.refreshCourses = this.refreshCourses.bind(this)
    }

    //refreshes and gets courses
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

    //html render course list
    render() {
        console.log('render')
        this.refreshCourses()
        return (
            <div>
                <h1>Course List</h1>
                <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.courseList.map(
                                    courseList =>
                                        <tr key={courseList.id}>
                                            <td>{courseList.name}</td>
                                            <td>{courseList.description}</td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }

}


export default StudentCourseComponent