import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'
import CourseService from '../../api/todo/CourseService.js'
import AuthenticationService from './AuthenticationService.js'

class CourseListStudentComponent extends Component {

    constructor(props) {
        console.log('constructor')
        super(props)
        this.state = {
            courseList: []
        }
        this.showStudents = this.showStudents.bind(this)
    }

    showStudents() {
        CourseService.displayStudentsCourse(this.props.match.params.id)
            .then(
                response => {
                    this.setState({ courseList: response.data })
                }
            )
    }

    backToCourse(){
        this.props.history.push(`/course`)
    }

    //html render class list
    render() {
        console.log('render')
        this.showStudents()
        return (
            <div>
                <h1>Course List</h1>
                <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Student Usernames</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.courseList.map(
                                    courseList =>
                                        <tr>
                                            <td>{courseList}</td>
                                        </tr>
                                )
                            }
                        <tr>
                            <td><button className="btn btn-success" onClick={() => this.backToCourse()}>Back to Courses</button></td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }

}


export default CourseListStudentComponent