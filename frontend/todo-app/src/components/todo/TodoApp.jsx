import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import AuthenticatedRoute from './AuthenticatedRoute.jsx'
import LoginComponent from './LoginComponent.jsx'
import ListTodosComponent from './ListTodosComponent.jsx'
import ErrorComponent from './ErrorComponent.jsx'
import HeaderComponent from './HeaderComponent.jsx'
import FooterComponent from './FooterComponent.jsx'
import LogoutComponent from './LogoutComponent.jsx'
import WelcomeComponent from './WelcomeComponent.jsx'
import TodoComponent from './TodoComponent.jsx'
import RegisterComponent from './RegisterComponent.jsx'
import CourseComponent from './CourseComponent.jsx'
import CourseAddComponent from './CourseAddComponent.jsx'
import ClassComponent from './ClassComponent.jsx'
import StudentClassComponent from './StudentClassComponent.jsx'
import StudentCourseComponent from './StudentCourseComponent.jsx'
import ClassAddComponent from './ClassAddComponent.jsx'
import AddStudentClassComponent from './AddStudentClassComponent.jsx'
import AddStudentCourseComponent from './AddStudentCourseComponent.jsx'
import ClassListStudentComponent from './ClassListStudentComponent.jsx'
import CourseListStudentComponent from './CourseListStudentComponent.jsx'

class TodoApp extends Component {
    render() {
        return (
            <div className="TodoApp">
                <Router>
                    <>
                        <HeaderComponent/>
                        <Switch>
                            <Route path="/" exact component={LoginComponent}/>
                            <Route path="/login" component={LoginComponent}/>
                            <AuthenticatedRoute path="/welcome/:name" component={WelcomeComponent}/>
                            <AuthenticatedRoute path="/course" component={CourseComponent}/>
                            <AuthenticatedRoute path="/addcourse" component={CourseAddComponent}/>
                            <AuthenticatedRoute path="/addstudentcourse/:id" component={AddStudentCourseComponent}/>
                            <AuthenticatedRoute path="/class" component={ClassComponent}/>
                            <AuthenticatedRoute path="/classlist/:id" component={ClassListStudentComponent}/>
                            <AuthenticatedRoute path="/courselist/:id" component={CourseListStudentComponent}/>
                            <AuthenticatedRoute path="/studentclass" component={StudentClassComponent}/>
                            <AuthenticatedRoute path="/studentcourse" component={StudentCourseComponent}/>
                            <AuthenticatedRoute path="/addclass" component={ClassAddComponent}/>
                            <AuthenticatedRoute path="/addstudentclass/:id" component={AddStudentClassComponent}/>
                            <AuthenticatedRoute path="/todos/:id" component={TodoComponent}/>
                            <AuthenticatedRoute path="/todos" component={ListTodosComponent}/>
                            <AuthenticatedRoute path="/logout" component={LogoutComponent}/>
                            <Route path="/register" component={RegisterComponent}/>
                            <Route component={ErrorComponent}/>
                        </Switch>
                        <FooterComponent/>
                    </>
                </Router>
                {/*<LoginComponent/>
                <WelcomeComponent/>*/}
            </div>
        )
    }
}

export default TodoApp