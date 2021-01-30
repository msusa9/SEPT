import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import HelloWorldService from '../../api/todo/HelloWorldService.js'
import AuthenticationService from './AuthenticationService.js'
import CourseService from '../../api/todo/CourseService.js'
import ClassService from '../../api/todo/ClassService.js'

class WelcomeComponent extends Component {

    
    
    
    constructor(props) {
        super(props)
        this.state = {
            username: [],
            studentID: [],
            courseList: [],
            classList: []
        }
        this.handleSuccessfulResponse = this.handleSuccessfulResponse.bind(this)
        this.handleError = this.handleError.bind(this)
    }

    render() {
        
        this.username = AuthenticationService.getLoggedInUserName()

        CourseService.executeCoursePathVariableService(this.username)
            .then(
                response => {
                    //console.log(response);
                    this.setState({ studentID: response.data })
                }
            )
        CourseService.executeCoursePathVariableService(this.username)
            .then(
                response => {
                    //console.log(response);
                    this.setState({ courseList: response.data })
                }
            )

        ClassService.executeClassPathVariableService(this.username)
            .then(
                response => {
                    //console.log(response);
                    this.setState({ classList: response.data })
                }
            )

        return (
            <>
            
                <h1>{this.username.toUpperCase()}</h1>
                <div style = {{ float: 'left'}}>
                <div className="container">
                    <h2>About Me</h2>
                    This is the profile page of {this.username.toUpperCase()} 
                    <br></br>
                    This is where you'll find the classes and groups you're a part of
                    <br></br>
                    You'll also see your friends too, in the future, hopefully.
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                
                
                    <h2>Details</h2>
                    Name: {} <br></br>
                    Email: {} <br></br>
                </div>
                </div>
                
                
                <div>
                <div>
                
                <div style = {{ float: 'right'}}>
                    <h2>Course List</h2>
                    <div className="container" >
                    
                        <table className="table">
                            <thead>
                                <tr  style ={{width: '50%'}}>
                              
                                    <th style={{width: '50%'}}>Name</th>
                                    <th style={{width: '50%'}}>Description</th>
                                    
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
                    </div>
                    </div>
                

                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                   
                
                <div>
                <div style = {{ float: 'right'}}>
                <h2>Class List</h2>
                    <div className="container" >
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
            </div>

            </>
        )
    }

    retrieveWelcomeMessage() {
        // HelloWorldService.executeHelloWorldService()
        // .then( response => this.handleSuccessfulResponse(response) )

        // HelloWorldService.executeHelloWorldBeanService()
        // .then( response => this.handleSuccessfulResponse(response) )

        HelloWorldService.executeHelloWorldPathVariableService(this.props.match.params.name)
            .then(response => this.handleSuccessfulResponse(response))
            .catch(error => this.handleError(error))
    }

    handleSuccessfulResponse(response) {
        console.log(response)
        this.setState({ welcomeMessage: response.data.message })
    }

    handleError(error) {

        console.log(error.response)

        let errorMessage = '';

        if (error.message)
            errorMessage += error.message

        if (error.response && error.response.data) {
            errorMessage += error.response.data.message
        }

        this.setState({ welcomeMessage: errorMessage })
    }

}


export default WelcomeComponent