import React, { Component } from 'react'
import AuthenticationService from './AuthenticationService.js'

class LoginComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            username: 'sept',
            password: '',
            hasLoginFailed: false,
            showSuccessMessage: false
        }
        // this.handleUsernameChange = this.handleUsernameChange.bind(this)
        // this.handlePasswordChange = this.handlePasswordChange.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.loginClicked = this.loginClicked.bind(this)
        this.registerClicked = this.registerClicked.bind(this)
    }

    handleChange(event) {
        //console.log(this.state);
        this.setState(
            {
                [event.target.name]
                    : event.target.value
            }
        )
    }

    // handleUsernameChange(event) {
    //     console.log(event.target.name);
    //     this.setState(
    //         {
    //             [event.target.name]
    //               :event.target.value
    //         }
    //     )
    // }

    // handlePasswordChange(event) {
    //     console.log(event.target.value);
    //     this.setState({password:event.target.value})
    // }

    loginClicked() {
        //sept,dummy
         //if(this.state.username==='admin' && this.state.password==='dummy'){
          //   AuthenticationService.registerSuccessfulLogin(this.state.username,this.state.password)
            // this.props.history.push(`/welcome/${this.state.username}`)
//             this.setState({showSuccessMessage:true})
 //            this.setState({hasLoginFailed:false})
    //    }
      //   else {
        //     this.setState({showSuccessMessage:false})
         //   this.setState({hasLoginFailed:true})
         //}
        // AuthenticationService.registerSuccessfulLogin(this.state.username,this.state.password)
         //this.props.history.push(`/welcome/${this.state.username}`)
        // this.setState({showSuccessMessage:true})
        // this.setState({hasLoginFailed:false})
        // AuthenticationService
        // .executeBasicAuthenticationService(this.state.username, this.state.password)
        // .then(() => {
        //     AuthenticationService.registerSuccessfulLogin(this.state.username,this.state.password)
        //     this.props.history.push(`/welcome/${this.state.username}`)
        // }).catch( () =>{
        //     this.setState({showSuccessMessage:false})
        //     this.setState({hasLoginFailed:true})
        // })
        
        AuthenticationService
            .executeJwtAuthenticationService(this.state.username, this.state.password)
            .then((response) => {
                AuthenticationService.registerSuccessfulLoginForJwt(this.state.username, response.data.token)
                this.props.history.push(`/welcome/${this.state.username}`)
            }).catch(() => {
                this.setState({ showSuccessMessage: false })
                this.setState({ hasLoginFailed: true })
            })

    }

    //register button goes to register page
    registerClicked() {
        this.props.history.push('register');
    }

    render() {
        return (
            <div>
                {this.state.hasLoginFailed && <div className="alert alert-warning">Invalid Credentials or something is wrong</div>}
                <div className="container" className = "asd">
                <h1 className = "title">Login</h1>
                    {/*<ShowInvalidCredentials hasLoginFailed={this.state.hasLoginFailed}/>*/}
                    {this.state.showSuccessMessage && <div>Login Sucessful</div>}
                    {/*<ShowLoginSuccessMessage showSuccessMessage={this.state.showSuccessMessage}/>*/}
                    <div className = "comp">
                        <input type="text" class = "log" name="username" placeholder = "User Name" required value={this.state.username} onChange={this.handleChange} />
                    </div>
                    <br />
                    <div className = "comp">
                        <input type="password" name="password" class = "log" placeholder = "Password" required value={this.state.password} onChange={this.handleChange} />
                    </div>
                    <br />
                    <button className="btn btn-success" onClick={this.loginClicked}>Login</button>
                    {/* register buttons function needed */}
                    <button className="btn btn-secondary btn-register" onClick={this.registerClicked}>Sign Up</button>
                </div>
            </div>
        )
    }
}

export default LoginComponent
