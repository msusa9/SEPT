import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import AuthenticationService from './AuthenticationService.js'


class HeaderComponent extends Component {
    render() {
        const isUserLoggedIn = AuthenticationService.isUserLoggedIn();
        let classURL="test";
        let courseURL="test";
        let username = AuthenticationService.getLoggedInUserName();

        if(username=="admin"){
            classURL="/class";
            courseURL="/course";
        }
        else{
            classURL="/studentclass";
            courseURL="/studentcourse";
        }
        //console.log(isUserLoggedIn);

        return (
            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div><a href="https://www.rmit.edu.au/" className="navbar-brand">RMIT</a></div>
                    <ul className="navbar-nav">
                        {isUserLoggedIn && <li><Link className="nav-link" to="/welcome/SEPT">{this.capitalize(username)}</Link></li>}
                        {isUserLoggedIn && <li><Link className="nav-link" to="/todos">Todos</Link></li>}
                        {isUserLoggedIn && <li><Link className="nav-link" to={courseURL}>Courses</Link></li>}
                        {isUserLoggedIn && <li><Link className="nav-link" to={classURL}>Classes</Link></li>}
                        {isUserLoggedIn && <li><Link className="nav-link" to="/todos">Groups</Link></li>}
                        {isUserLoggedIn && <li><Link className="nav-link" to="/todos">Profile</Link></li>}
                    </ul>
                    <ul className="navbar-nav navbar-collapse justify-content-end">
                        {!isUserLoggedIn && <li><Link className="nav-link" to="/login">Login</Link></li>}
                        {isUserLoggedIn && <li><Link className="nav-link" to="/logout" onClick={AuthenticationService.logout}>Logout</Link></li>}
                    </ul>
                </nav>
            </header>
        )
    }

    capitalize(str) {
        if(str) return str.charAt(0).toUpperCase() + str.slice(1);
    }
}

export default HeaderComponent