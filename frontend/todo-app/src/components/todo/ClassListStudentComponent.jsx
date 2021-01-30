import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'
import ClassService from '../../api/todo/ClassService.js'
import AuthenticationService from './AuthenticationService.js'

class ClassListStudentComponent extends Component {

    constructor(props) {
        console.log('constructor')
        super(props)
        this.state = {
            classList: []
        }
        this.showStudents = this.showStudents.bind(this)
    }

    showStudents() {
        ClassService.displayStudentsClass(this.props.match.params.id)
            .then(
                response => {
                    this.setState({ classList: response.data })
                }
            )
    }

    backToClass(){
        this.props.history.push(`/class`)
    }

    //it renders the html class list. 
    render() {
        console.log('render')
        this.showStudents()
        return (
            <div>
                <h1>Class List</h1>
                <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Student Usernames</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.classList.map(
                                    classList =>
                                        <tr>
                                            <td>{classList}</td>
                                        </tr>
                                )
                            }
                        <tr>
                            <td><button className="btn btn-success" onClick={() => this.backToClass()}>Back to Classes</button></td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }

}


export default ClassListStudentComponent