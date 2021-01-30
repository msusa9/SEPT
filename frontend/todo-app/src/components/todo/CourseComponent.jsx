import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import CourseService from '../../api/todo/CourseService.js'
import AuthenticationService from './AuthenticationService.js'

class CourseComponent extends Component {

    constructor(props) {
        console.log('constructor')
        super(props)
        this.state = {
            courseList: []
        }
        this.refreshCourses = this.refreshCourses.bind(this)
    }

    //refreshes and gets courses from CourseSerivce.js
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

    //sends ID to CourseService.js for it to be deleted
    deleteCourse(id){
        //console.log(id + " " + username);
        CourseService.deleteCourse(id)
            .then(
                response => {
                    this.setState({ message: `Delete of course ${id} Successful` })
                    this.refreshCourses()
                }
            )
    }

    //pushes the "/addstudentcourse" page for a student to be added to a course
    addStudent(id){
        //console.log(id + " " + username);
        this.props.history.push(`/addstudentcourse/${id}`)
    }

    //pushes the "/addcourse" page for a course to be created
    addCourse(){
        this.props.history.push(`/addcourse`)
    }

    courseList(id){
        this.props.history.push(`/courselist/${id}`)
    }

    //html render form
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
                                            <td><button className="btn btn-success" onClick={() => this.deleteCourse(courseList.id)}>Delete</button></td>
                                            <td><button className="btn btn-success" onClick={() => this.addStudent(courseList.id)}>Add Student</button></td>
                                            <td><button className="btn btn-success" onClick={() => this.courseList(courseList.id)}>Course List</button></td>
                                        </tr>
                                )
                            }
                        <tr>
                            <td><button className="btn btn-success" onClick={() => this.addCourse()}>Add</button></td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }

}


export default CourseComponent