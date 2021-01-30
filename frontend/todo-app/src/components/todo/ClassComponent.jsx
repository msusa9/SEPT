import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'
import ClassService from '../../api/todo/ClassService.js'
import AuthenticationService from './AuthenticationService.js'

class ClassComponent extends Component {

    constructor(props) {
        console.log('constructor')
        super(props)
        this.state = {
            classList: []
        }
        this.refreshClasses = this.refreshClasses.bind(this)
    }

    //refreshes and gets classes from ClassService.js
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

    //sends ID to delete class based on method in ClassService.js
    deleteClass(id){
        //console.log(id + " " + username);
        ClassService.deleteClass(id)
            .then(
                response => {
                    this.setState({ message: `Delete of course ${id} Successful` })
                    this.refreshClasses()
                }
            )
    }

    //sends ID to the addStudent page, also changes current page to "/addstudentclass"
    addStudent(id){
        //console.log(id + " " + username);
        this.props.history.push(`/addstudentclass/${id}`)
    }

    //method to go to the page where you can create a class
    addClass(){
        this.props.history.push(`/addclass`)
    }

    classList(id){
        this.props.history.push(`/classlist/${id}`)
    }

    //html render class list
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
                                            <td><button className="btn btn-success" onClick={() => this.deleteClass(classList.id)}>Delete</button></td>
                                            <td><button className="btn btn-success" onClick={() => this.addStudent(classList.id)}>Add Student</button></td>
                                            <td><button className="btn btn-success" onClick={() => this.classList(classList.id)}>Class List</button></td>
                                        </tr>
                                )
                            }
                        <tr>
                            <td><button className="btn btn-success" onClick={() => this.addClass()}>Add</button></td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }

}


export default ClassComponent