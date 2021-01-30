import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'
import ClassService from '../../api/todo/ClassService.js'
import AuthenticationService from './AuthenticationService.js'

class StudentClassComponent extends Component {

    constructor(props) {
        console.log('constructor')
        super(props)
        this.state = {
            classList: []
        }
        this.refreshClasses = this.refreshClasses.bind(this)
    }
    //refreshes and gets lists of classes
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

    //html render class
    render() {
        console.log('render')
        this.refreshClasses()
        return (
            <div>
                <h1>Class List</h1>
                <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Type</th>
                                <th>Teacher</th>
                                <th>Class Day</th>
                                <th>Class Time</th>
                                <th>Course</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.classList.map(
                                    classList =>
                                        <tr key={classList.id}>
                                            <td>{classList.type}</td>
                                            <td>{classList.teacher}</td>
                                            <td>{classList.classDay}</td>
                                            <td>{classList.classTime}</td>
                                            <td>{classList.course}</td>
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


export default StudentClassComponent