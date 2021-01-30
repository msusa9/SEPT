(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{39:function(e,t,a){e.exports=a(75)},44:function(e,t,a){},73:function(e,t,a){},74:function(e,t,a){},75:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),l=a(34),r=a.n(l),c=(a(44),a(3)),o=a(4),i=a(7),u=a(6),m=a(8),d=a(78),h=a(80),b=a(79),p=a(77),E=a(9),f=a.n(E),v=Object({NODE_ENV:"production",PUBLIC_URL:""}).REACT_APP_API_BASE_URL||"http://localhost:8080",g="http://localhost:8080/jpa",y=new(function(){function e(){Object(c.a)(this,e)}return Object(o.a)(e,[{key:"executeBasicAuthenticationService",value:function(e,t){return f.a.get("".concat(v,"/basicauth"),{headers:{authorization:this.createBasicAuthToken(e,t)}})}},{key:"executeJwtAuthenticationService",value:function(e,t){return f.a.post("".concat(v,"/authenticate"),{username:e,password:t})}},{key:"createBasicAuthToken",value:function(e,t){return"Basic "+window.btoa(e+":"+t)}},{key:"registerSuccessfulLogin",value:function(e,t){sessionStorage.setItem("authenticatedUser",e),this.setupAxiosInterceptors(this.createBasicAuthToken(e,t))}},{key:"registerSuccessfulLoginForJwt",value:function(e,t){sessionStorage.setItem("authenticatedUser",e),this.setupAxiosInterceptors(this.createJWTToken(t))}},{key:"createJWTToken",value:function(e){return"Bearer "+e}},{key:"logout",value:function(){sessionStorage.removeItem("authenticatedUser")}},{key:"isUserLoggedIn",value:function(){return null!==sessionStorage.getItem("authenticatedUser")}},{key:"getLoggedInUserName",value:function(){var e=sessionStorage.getItem("authenticatedUser");return null===e?"":e}},{key:"setupAxiosInterceptors",value:function(e){var t=this;f.a.interceptors.request.use(function(a){return t.isUserLoggedIn()&&(a.headers.authorization=e),a})}}]),e}()),C=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return y.isUserLoggedIn()?s.a.createElement(b.a,this.props):s.a.createElement(p.a,{to:"/login"})}}]),t}(n.Component),O=a(25),j=a(1),k=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).state={username:"sept",password:"",hasLoginFailed:!1,showSuccessMessage:!1},a.handleChange=a.handleChange.bind(Object(j.a)(Object(j.a)(a))),a.loginClicked=a.loginClicked.bind(Object(j.a)(Object(j.a)(a))),a.registerClicked=a.registerClicked.bind(Object(j.a)(Object(j.a)(a))),a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"handleChange",value:function(e){this.setState(Object(O.a)({},e.target.name,e.target.value))}},{key:"loginClicked",value:function(){var e=this;y.executeJwtAuthenticationService(this.state.username,this.state.password).then(function(t){y.registerSuccessfulLoginForJwt(e.state.username,t.data.token),e.props.history.push("/welcome/".concat(e.state.username))}).catch(function(){e.setState({showSuccessMessage:!1}),e.setState({hasLoginFailed:!0})})}},{key:"registerClicked",value:function(){this.props.history.push("register")}},{key:"render",value:function(){return s.a.createElement("div",null,this.state.hasLoginFailed&&s.a.createElement("div",{className:"alert alert-warning"},"Invalid Credentials or something is wrong"),s.a.createElement("div",Object(O.a)({className:"container"},"className","asd"),s.a.createElement("h1",{className:"title"},"Login"),this.state.showSuccessMessage&&s.a.createElement("div",null,"Login Sucessful"),s.a.createElement("div",{className:"comp"},s.a.createElement("input",{type:"text",class:"log",name:"username",placeholder:"User Name",required:!0,value:this.state.username,onChange:this.handleChange})),s.a.createElement("br",null),s.a.createElement("div",{className:"comp"},s.a.createElement("input",{type:"password",name:"password",class:"log",placeholder:"Password",required:!0,value:this.state.password,onChange:this.handleChange})),s.a.createElement("br",null),s.a.createElement("button",{className:"btn btn-success",onClick:this.loginClicked},"Login"),s.a.createElement("button",{className:"btn btn-secondary btn-register",onClick:this.registerClicked},"Sign Up")))}}]),t}(n.Component),N=new(function(){function e(){Object(c.a)(this,e)}return Object(o.a)(e,[{key:"retrieveAllTodos",value:function(e){return f.a.get("".concat(g,"/users/").concat(e,"/todos"))}},{key:"retrieveTodo",value:function(e,t){return f.a.get("".concat(g,"/users/").concat(e,"/todos/").concat(t))}},{key:"deleteTodo",value:function(e,t){return f.a.delete("".concat(g,"/users/").concat(e,"/todos/").concat(t))}},{key:"updateTodo",value:function(e,t,a){return f.a.put("".concat(g,"/users/").concat(e,"/todos/").concat(t),a)}},{key:"createTodo",value:function(e,t){return f.a.post("".concat(g,"/users/").concat(e,"/todos/"),t)}}]),e}()),S=a(12),w=a.n(S),L=function(e){function t(e){var a;return Object(c.a)(this,t),console.log("constructor"),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).state={todos:[],message:null},a.deleteTodoClicked=a.deleteTodoClicked.bind(Object(j.a)(Object(j.a)(a))),a.updateTodoClicked=a.updateTodoClicked.bind(Object(j.a)(Object(j.a)(a))),a.addTodoClicked=a.addTodoClicked.bind(Object(j.a)(Object(j.a)(a))),a.refreshTodos=a.refreshTodos.bind(Object(j.a)(Object(j.a)(a))),a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentWillUnmount",value:function(){console.log("componentWillUnmount")}},{key:"shouldComponentUpdate",value:function(e,t){return console.log("shouldComponentUpdate"),console.log(e),console.log(t),!0}},{key:"componentDidMount",value:function(){console.log("componentDidMount"),this.refreshTodos(),console.log(this.state)}},{key:"refreshTodos",value:function(){var e=this,t=y.getLoggedInUserName();N.retrieveAllTodos(t).then(function(t){e.setState({todos:t.data})})}},{key:"deleteTodoClicked",value:function(e){var t=this,a=y.getLoggedInUserName();N.deleteTodo(a,e).then(function(a){t.setState({message:"Delete of todo ".concat(e," Successful")}),t.refreshTodos()})}},{key:"addTodoClicked",value:function(){this.props.history.push("/todos/-1")}},{key:"updateTodoClicked",value:function(e){console.log("update "+e),this.props.history.push("/todos/".concat(e))}},{key:"render",value:function(){var e=this;return console.log("render"),s.a.createElement("div",null,s.a.createElement("h1",null,"List Todos"),this.state.message&&s.a.createElement("div",{class:"alert alert-success"},this.state.message),s.a.createElement("div",{className:"container"},s.a.createElement("table",{className:"table"},s.a.createElement("thead",null,s.a.createElement("tr",null,s.a.createElement("th",null,"Description"),s.a.createElement("th",null,"Target Date"),s.a.createElement("th",null,"IsCompleted?"),s.a.createElement("th",null,"Update"),s.a.createElement("th",null,"Delete"))),s.a.createElement("tbody",null,this.state.todos.map(function(t){return s.a.createElement("tr",{key:t.id},s.a.createElement("td",null,t.description),s.a.createElement("td",null,w()(t.targetDate).format("YYYY-MM-DD")),s.a.createElement("td",null,t.done.toString()),s.a.createElement("td",null,s.a.createElement("button",{className:"btn btn-success",onClick:function(){return e.updateTodoClicked(t.id)}},"Update")),s.a.createElement("td",null,s.a.createElement("button",{className:"btn btn-warning",onClick:function(){return e.deleteTodoClicked(t.id)}},"Delete")))}))),s.a.createElement("div",{className:"row"},s.a.createElement("button",{className:"btn btn-success",onClick:this.addTodoClicked},"Add"))))}}]),t}(n.Component);var T=function(){return s.a.createElement("div",null,"An Error Occurred. I don't know what to do! Contact support at abcd-efgh-ijkl")},D=a(76),U=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=y.isUserLoggedIn(),t="test",a="test",n=y.getLoggedInUserName();return"admin"==n?(t="/class",a="/course"):(t="/studentclass",a="/studentcourse"),s.a.createElement("header",null,s.a.createElement("nav",{className:"navbar navbar-expand-md navbar-dark bg-dark"},s.a.createElement("div",null,s.a.createElement("a",{href:"https://www.rmit.edu.au/",className:"navbar-brand"},"RMIT")),s.a.createElement("ul",{className:"navbar-nav"},e&&s.a.createElement("li",null,s.a.createElement(D.a,{className:"nav-link",to:"/welcome/SEPT"},this.capitalize(n))),e&&s.a.createElement("li",null,s.a.createElement(D.a,{className:"nav-link",to:"/todos"},"Todos")),e&&s.a.createElement("li",null,s.a.createElement(D.a,{className:"nav-link",to:a},"Courses")),e&&s.a.createElement("li",null,s.a.createElement(D.a,{className:"nav-link",to:t},"Classes")),e&&s.a.createElement("li",null,s.a.createElement(D.a,{className:"nav-link",to:"/todos"},"Groups")),e&&s.a.createElement("li",null,s.a.createElement(D.a,{className:"nav-link",to:"/todos"},"Profile"))),s.a.createElement("ul",{className:"navbar-nav navbar-collapse justify-content-end"},!e&&s.a.createElement("li",null,s.a.createElement(D.a,{className:"nav-link",to:"/login"},"Login")),e&&s.a.createElement("li",null,s.a.createElement(D.a,{className:"nav-link",to:"/logout",onClick:y.logout},"Logout")))))}},{key:"capitalize",value:function(e){if(e)return e.charAt(0).toUpperCase()+e.slice(1)}}]),t}(n.Component),A=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return s.a.createElement("footer",{className:"footer"},s.a.createElement("span",{className:"text-muted"},"All Rights Reserved 2019 @RMIT SEPT"))}}]),t}(n.Component),I=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement("h1",null,"You are logged out"),s.a.createElement("div",{className:"container"},"Thank You for Using Our Application."))}}]),t}(n.Component),x=new(function(){function e(){Object(c.a)(this,e)}return Object(o.a)(e,[{key:"executeHelloWorldService",value:function(){return f.a.get("".concat(g,"/hello-world"))}},{key:"executeHelloWorldBeanService",value:function(){return f.a.get("".concat(g,"/hello-world-bean"))}},{key:"executeHelloWorldPathVariableService",value:function(e){return f.a.get("".concat(g,"/hello-world/path-variable/").concat(e))}}]),e}()),P=new(function(){function e(){Object(c.a)(this,e)}return Object(o.a)(e,[{key:"executeCoursePathVariableService",value:function(e){return f.a.get("".concat(g,"/courses/").concat(e))}},{key:"deleteCourse",value:function(e){return f.a.delete("".concat(g,"/course/").concat(e))}},{key:"addCourse",value:function(e,t){return f.a.post("".concat(g,"/course/").concat(e,"/").concat(t))}},{key:"addStudentCourse",value:function(e,t){return f.a.post("".concat(g,"/addStudentCourse/").concat(e,"/").concat(t))}},{key:"displayStudentsCourse",value:function(e){return f.a.get("".concat(g,"/getStudentsCourse/").concat(e))}}]),e}()),B=new(function(){function e(){Object(c.a)(this,e)}return Object(o.a)(e,[{key:"executeClassPathVariableService",value:function(e){return f.a.get("".concat(g,"/classes/").concat(e))}},{key:"deleteClass",value:function(e){return f.a.delete("".concat(g,"/class/").concat(e))}},{key:"addClass",value:function(e,t,a,n,s){return f.a.post("".concat(g,"/class/").concat(e,"/").concat(t,"/").concat(a,"/").concat(n,"/").concat(s))}},{key:"addStudentClass",value:function(e,t){return f.a.post("".concat(g,"/addStudentClass/").concat(e,"/").concat(t))}},{key:"displayStudentsClass",value:function(e){return f.a.get("".concat(g,"/getStudentsClass/").concat(e))}}]),e}()),V=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).state={username:[],studentID:[],courseList:[],classList:[]},a.handleSuccessfulResponse=a.handleSuccessfulResponse.bind(Object(j.a)(Object(j.a)(a))),a.handleError=a.handleError.bind(Object(j.a)(Object(j.a)(a))),a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return this.username=y.getLoggedInUserName(),P.executeCoursePathVariableService(this.username).then(function(t){e.setState({studentID:t.data})}),P.executeCoursePathVariableService(this.username).then(function(t){e.setState({courseList:t.data})}),B.executeClassPathVariableService(this.username).then(function(t){e.setState({classList:t.data})}),s.a.createElement(s.a.Fragment,null,s.a.createElement("h1",null,this.username.toUpperCase()),s.a.createElement("div",{style:{float:"left"}},s.a.createElement("div",{className:"container"},s.a.createElement("h2",null,"About Me"),"This is the profile page of ",this.username.toUpperCase(),s.a.createElement("br",null),"This is where you'll find the classes and groups you're a part of",s.a.createElement("br",null),"You'll also see your friends too, in the future, hopefully.",s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("h2",null,"Details"),"Name: "," ",s.a.createElement("br",null),"Email: "," ",s.a.createElement("br",null))),s.a.createElement("div",null,s.a.createElement("div",null,s.a.createElement("div",{style:{float:"right"}},s.a.createElement("h2",null,"Course List"),s.a.createElement("div",{className:"container"},s.a.createElement("table",{className:"table"},s.a.createElement("thead",null,s.a.createElement("tr",{style:{width:"50%"}},s.a.createElement("th",{style:{width:"50%"}},"Name"),s.a.createElement("th",{style:{width:"50%"}},"Description"))),s.a.createElement("tbody",null,this.state.courseList.map(function(e){return s.a.createElement("tr",{key:e.id},s.a.createElement("td",null,e.name),s.a.createElement("td",null,e.description))}))))))),s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("div",null,s.a.createElement("div",{style:{float:"right"}},s.a.createElement("h2",null,"Class List"),s.a.createElement("div",{className:"container"},s.a.createElement("table",{className:"table"},s.a.createElement("thead",null,s.a.createElement("tr",null,s.a.createElement("th",null,"Type"),s.a.createElement("th",null,"Teacher"),s.a.createElement("th",null,"Class Day"),s.a.createElement("th",null,"Class Time"),s.a.createElement("th",null,"Course"))),s.a.createElement("tbody",null,this.state.classList.map(function(e){return s.a.createElement("tr",{key:e.id},s.a.createElement("td",null,e.type),s.a.createElement("td",null,e.teacher),s.a.createElement("td",null,e.classDay),s.a.createElement("td",null,e.classTime),s.a.createElement("td",null,e.course))})))))))}},{key:"retrieveWelcomeMessage",value:function(){var e=this;x.executeHelloWorldPathVariableService(this.props.match.params.name).then(function(t){return e.handleSuccessfulResponse(t)}).catch(function(t){return e.handleError(t)})}},{key:"handleSuccessfulResponse",value:function(e){console.log(e),this.setState({welcomeMessage:e.data.message})}},{key:"handleError",value:function(e){console.log(e.response);var t="";e.message&&(t+=e.message),e.response&&e.response.data&&(t+=e.response.data.message),this.setState({welcomeMessage:t})}}]),t}(n.Component),M=a(5),R=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).state={id:a.props.match.params.id,description:"",targetDate:w()(new Date).format("YYYY-MM-DD")},a.onSubmit=a.onSubmit.bind(Object(j.a)(Object(j.a)(a))),a.validate=a.validate.bind(Object(j.a)(Object(j.a)(a))),a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;if(-1!==this.state.id){var t=y.getLoggedInUserName();N.retrieveTodo(t,this.state.id).then(function(t){return e.setState({description:t.data.description,targetDate:w()(t.data.targetDate).format("YYYY-MM-DD")})})}}},{key:"validate",value:function(e){var t={};return e.description?e.description.length<5&&(t.description="Enter atleast 5 Characters in Description"):t.description="Enter a Description",w()(e.targetDate).isValid()||(t.targetDate="Enter a valid Target Date"),t}},{key:"onSubmit",value:function(e){var t=this,a=y.getLoggedInUserName(),n={id:this.state.id,description:e.description,targetDate:e.targetDate};-1===this.state.id?N.createTodo(a,n).then(function(){return t.props.history.push("/todos")}):N.updateTodo(a,this.state.id,n).then(function(){return t.props.history.push("/todos")}),console.log(e)}},{key:"render",value:function(){var e=this.state,t=e.description,a=e.targetDate;return s.a.createElement("div",null,s.a.createElement("h1",null,"Todo"),s.a.createElement("div",{className:"container"},s.a.createElement(M.d,{initialValues:{description:t,targetDate:a},onSubmit:this.onSubmit,validateOnChange:!1,validateOnBlur:!1,validate:this.validate,enableReinitialize:!0},function(e){return s.a.createElement(M.c,null,s.a.createElement(M.a,{name:"description",component:"div",className:"alert alert-warning"}),s.a.createElement(M.a,{name:"targetDate",component:"div",className:"alert alert-warning"}),s.a.createElement("fieldset",{className:"form-group"},s.a.createElement("label",null,"Description"),s.a.createElement(M.b,{className:"form-control",type:"text",name:"description"})),s.a.createElement("fieldset",{className:"form-group"},s.a.createElement("label",null,"Target Date"),s.a.createElement(M.b,{className:"form-control",type:"date",name:"targetDate"})),s.a.createElement("button",{className:"btn btn-success",type:"submit"},"Save"))})))}}]),t}(n.Component),Y=new(function(){function e(){Object(c.a)(this,e)}return Object(o.a)(e,[{key:"addStudent",value:function(e,t,a){return f.a.post("".concat(g,"/").concat(e,"/").concat(t,"/").concat(a))}}]),e}()),W=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).state={username:"",password:"",confirmpass:"",email:"",hasRegisterFailed:!1,showSuccessMessage:!1},a.handleBack=a.handleBack.bind(Object(j.a)(Object(j.a)(a))),a.validate=a.validate.bind(Object(j.a)(Object(j.a)(a))),a.onSubmit=a.onSubmit.bind(Object(j.a)(Object(j.a)(a))),a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"handleBack",value:function(e){this.props.history.push("login")}},{key:"onSubmit",value:function(e){var t=this;console.log(this.state.username),Y.addStudent(this.state.username,this.state.password,this.state.email).then(function(e){t.props.history.push("login")}).catch(function(){alert("something is wrong"),t.props.history.push("register")})}},{key:"validate",value:function(e){var t={};return e.username?/^([a-zA-Z])*$/.test(e.username)||(t.username="Invalid username address"):t.username="Please Add a Username",e.password.length<5&&(t.confirmpass="Password must be at least 5 characters"),e.password!=e.confirmpass&&(t.confirmpass="Password must match"),t}},{key:"render",value:function(){var e=this,t=this.state,a=t.username,n=t.password,l=t.confirmpass,r=t.email;return s.a.createElement("div",null,s.a.createElement("h1",null,"Register"),s.a.createElement("div",{className:"container"},s.a.createElement(M.d,{initialValues:{username:a,password:n,confirmpass:l,email:r},onSubmit:this.onSubmit,validateOnChange:!1,validateOnBlur:!1,validate:this.validate,enableReinitialize:!0},function(t){return s.a.createElement(M.c,null,s.a.createElement(M.a,{name:"username",component:"div",className:"alert alert-warning"}),s.a.createElement(M.a,{name:"password",component:"div",className:"alert alert-warning"}),s.a.createElement(M.a,{name:"confirmpass",component:"div",className:"alert alert-warning"}),s.a.createElement(M.a,{name:"email",component:"div",className:"alert alert-warning"}),s.a.createElement("fieldset",{className:"form-group"},s.a.createElement("label",null,"Username"),s.a.createElement(M.b,{className:"form-control log1",type:"text",name:"username",required:!0,placeholder:"User Name"})),s.a.createElement("fieldset",{className:"form-group"},s.a.createElement("label",null,"Password"),s.a.createElement(M.b,{className:"form-control log1",type:"password",name:"password",required:!0,placeholder:"Password at least 5 char"})),s.a.createElement("fieldset",{className:"form-group"},s.a.createElement("label",null,"Confirm Password"),s.a.createElement(M.b,{className:"form-control log1",id:"confirm",type:"password",name:"confirmpass",required:!0,placeholder:"Password"})),s.a.createElement("fieldset",{className:"form-group"},s.a.createElement("label",null,"Email"),s.a.createElement(M.b,{className:"form-control log1",type:"email",name:"email",required:!0,placeholder:"Email i.e. a@a.rmit.edu.au"})),s.a.createElement("button",{className:"btn btn-success",type:"submit"},"Register"),s.a.createElement("button",{className:"btn btn-secondary btn-register",onClick:e.handleBack},"Back"))})))}}]),t}(n.Component),z=function(e){function t(e){var a;return Object(c.a)(this,t),console.log("constructor"),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).state={courseList:[]},a.refreshCourses=a.refreshCourses.bind(Object(j.a)(Object(j.a)(a))),a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"refreshCourses",value:function(){var e=this,t=y.getLoggedInUserName();P.executeCoursePathVariableService(t).then(function(t){e.setState({courseList:t.data})})}},{key:"deleteCourse",value:function(e){var t=this;P.deleteCourse(e).then(function(a){t.setState({message:"Delete of course ".concat(e," Successful")}),t.refreshCourses()})}},{key:"addStudent",value:function(e){this.props.history.push("/addstudentcourse/".concat(e))}},{key:"addCourse",value:function(){this.props.history.push("/addcourse")}},{key:"courseList",value:function(e){this.props.history.push("/courselist/".concat(e))}},{key:"render",value:function(){var e=this;return console.log("render"),this.refreshCourses(),s.a.createElement("div",null,s.a.createElement("h1",null,"Course List"),s.a.createElement("div",{className:"container"},s.a.createElement("table",{className:"table"},s.a.createElement("thead",null,s.a.createElement("tr",null,s.a.createElement("th",null,"Name"),s.a.createElement("th",null,"Description"))),s.a.createElement("tbody",null,this.state.courseList.map(function(t){return s.a.createElement("tr",{key:t.id},s.a.createElement("td",null,t.name),s.a.createElement("td",null,t.description),s.a.createElement("td",null,s.a.createElement("button",{className:"btn btn-success",onClick:function(){return e.deleteCourse(t.id)}},"Delete")),s.a.createElement("td",null,s.a.createElement("button",{className:"btn btn-success",onClick:function(){return e.addStudent(t.id)}},"Add Student")),s.a.createElement("td",null,s.a.createElement("button",{className:"btn btn-success",onClick:function(){return e.courseList(t.id)}},"Course List")))}),s.a.createElement("tr",null,s.a.createElement("td",null,s.a.createElement("button",{className:"btn btn-success",onClick:function(){return e.addCourse()}},"Add")))))))}}]),t}(n.Component),F=function(e){function t(e){var a;return Object(c.a)(this,t),console.log("constructor"),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).state={names:"",description:""},a.addCourse=a.addCourse.bind(Object(j.a)(Object(j.a)(a))),a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"addCourse",value:function(e){var t=this;P.addCourse(e.name,e.description).then(function(a){t.setState({message:"Adding of course ".concat(e.name," Successful")}),t.props.history.push("/course")})}},{key:"render",value:function(){console.log("render");var e=this.state,t=e.names,a=e.description;return s.a.createElement("div",null,s.a.createElement("h1",null,"Add Course"),s.a.createElement("div",{className:"container"},s.a.createElement(M.d,{initialValues:{names:t,description:a},onSubmit:this.onSubmit,validateOnChange:!1,validateOnBlur:!1,validate:this.addCourse,enableReinitialize:!0},function(e){return s.a.createElement(M.c,null,s.a.createElement(M.a,{name:"description",component:"div",className:"alert alert-warning"}),s.a.createElement(M.a,{name:"targetDate",component:"div",className:"alert alert-warning"}),s.a.createElement("fieldset",{className:"form-group"},s.a.createElement("label",null,"Name"),s.a.createElement(M.b,{className:"form-control",type:"text",name:"name"})),s.a.createElement("fieldset",{className:"form-group"},s.a.createElement("label",null,"Description"),s.a.createElement(M.b,{className:"form-control",type:"text",name:"description"})),s.a.createElement("button",{className:"btn btn-success",type:"submit"},"Save"))})))}}]),t}(n.Component),J=function(e){function t(e){var a;return Object(c.a)(this,t),console.log("constructor"),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).state={classList:[]},a.refreshClasses=a.refreshClasses.bind(Object(j.a)(Object(j.a)(a))),a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"refreshClasses",value:function(){var e=this,t=y.getLoggedInUserName();B.executeClassPathVariableService(t).then(function(t){e.setState({classList:t.data})})}},{key:"deleteClass",value:function(e){var t=this;B.deleteClass(e).then(function(a){t.setState({message:"Delete of course ".concat(e," Successful")}),t.refreshClasses()})}},{key:"addStudent",value:function(e){this.props.history.push("/addstudentclass/".concat(e))}},{key:"addClass",value:function(){this.props.history.push("/addclass")}},{key:"classList",value:function(e){this.props.history.push("/classlist/".concat(e))}},{key:"render",value:function(){var e=this;return console.log("render"),this.refreshClasses(),s.a.createElement("div",null,s.a.createElement("h1",null,"Class List"),s.a.createElement("div",{className:"container"},s.a.createElement("table",{className:"table"},s.a.createElement("thead",null,s.a.createElement("tr",null,s.a.createElement("th",null,"Type"),s.a.createElement("th",null,"Teacher"),s.a.createElement("th",null,"Class Day"),s.a.createElement("th",null,"Class Time"),s.a.createElement("th",null,"Course"))),s.a.createElement("tbody",null,this.state.classList.map(function(t){return s.a.createElement("tr",{key:t.id},s.a.createElement("td",null,t.type),s.a.createElement("td",null,t.teacher),s.a.createElement("td",null,t.classDay),s.a.createElement("td",null,t.classTime),s.a.createElement("td",null,t.course),s.a.createElement("td",null,s.a.createElement("button",{className:"btn btn-success",onClick:function(){return e.deleteClass(t.id)}},"Delete")),s.a.createElement("td",null,s.a.createElement("button",{className:"btn btn-success",onClick:function(){return e.addStudent(t.id)}},"Add Student")),s.a.createElement("td",null,s.a.createElement("button",{className:"btn btn-success",onClick:function(){return e.classList(t.id)}},"Class List")))}),s.a.createElement("tr",null,s.a.createElement("td",null,s.a.createElement("button",{className:"btn btn-success",onClick:function(){return e.addClass()}},"Add")))))))}}]),t}(n.Component),q=function(e){function t(e){var a;return Object(c.a)(this,t),console.log("constructor"),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).state={classList:[]},a.refreshClasses=a.refreshClasses.bind(Object(j.a)(Object(j.a)(a))),a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"refreshClasses",value:function(){var e=this,t=y.getLoggedInUserName();B.executeClassPathVariableService(t).then(function(t){e.setState({classList:t.data})})}},{key:"render",value:function(){return console.log("render"),this.refreshClasses(),s.a.createElement("div",null,s.a.createElement("h1",null,"Class List"),s.a.createElement("div",{className:"container"},s.a.createElement("table",{className:"table"},s.a.createElement("thead",null,s.a.createElement("tr",null,s.a.createElement("th",null,"Type"),s.a.createElement("th",null,"Teacher"),s.a.createElement("th",null,"Class Day"),s.a.createElement("th",null,"Class Time"),s.a.createElement("th",null,"Course"))),s.a.createElement("tbody",null,this.state.classList.map(function(e){return s.a.createElement("tr",{key:e.id},s.a.createElement("td",null,e.type),s.a.createElement("td",null,e.teacher),s.a.createElement("td",null,e.classDay),s.a.createElement("td",null,e.classTime),s.a.createElement("td",null,e.course))})))))}}]),t}(n.Component),_=function(e){function t(e){var a;return Object(c.a)(this,t),console.log("constructor"),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).state={courseList:[]},a.refreshCourses=a.refreshCourses.bind(Object(j.a)(Object(j.a)(a))),a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"refreshCourses",value:function(){var e=this,t=y.getLoggedInUserName();P.executeCoursePathVariableService(t).then(function(t){e.setState({courseList:t.data})})}},{key:"render",value:function(){return console.log("render"),this.refreshCourses(),s.a.createElement("div",null,s.a.createElement("h1",null,"Course List"),s.a.createElement("div",{className:"container"},s.a.createElement("table",{className:"table"},s.a.createElement("thead",null,s.a.createElement("tr",null,s.a.createElement("th",null,"Name"),s.a.createElement("th",null,"Description"))),s.a.createElement("tbody",null,this.state.courseList.map(function(e){return s.a.createElement("tr",{key:e.id},s.a.createElement("td",null,e.name),s.a.createElement("td",null,e.description))})))))}}]),t}(n.Component),H=function(e){function t(e){var a;return Object(c.a)(this,t),console.log("constructor"),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).state={teacher:"",type:"",classDay:"",classTime:"",course:" ",courseList:[]},a.addClass=a.addClass.bind(Object(j.a)(Object(j.a)(a))),a.refreshCourses=a.refreshCourses.bind(Object(j.a)(Object(j.a)(a))),a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"addClass",value:function(e){var t=this;B.addClass(e.teacher,e.type,e.classDay,e.classTime,e.course).then(function(a){t.setState({message:"Adding of class ".concat(e.type," Successful")}),t.props.history.push("/class")})}},{key:"refreshCourses",value:function(){var e=this,t=y.getLoggedInUserName();P.executeCoursePathVariableService(t).then(function(t){e.setState({courseList:t.data})})}},{key:"render",value:function(){var e=this;console.log("render");var t=this.state,a=t.teacher,n=t.type,l=t.classDay,r=t.classTime,c=t.course;return this.refreshCourses(),s.a.createElement("div",null,s.a.createElement("h1",null,"Add Class"),s.a.createElement("div",{className:"container"},s.a.createElement(M.d,{initialValues:{teacher:a,type:n,classDay:l,classTime:r,course:c},onSubmit:this.onSubmit,validateOnChange:!1,validateOnBlur:!1,validate:this.addClass,enableReinitialize:!0},function(t){return s.a.createElement(M.c,null,s.a.createElement(M.a,{name:"description",component:"div",className:"alert alert-warning"}),s.a.createElement(M.a,{name:"targetDate",component:"div",className:"alert alert-warning"}),s.a.createElement("fieldset",{className:"form-group"},s.a.createElement("label",null,"Teacher"),s.a.createElement(M.b,{className:"form-control",type:"text",name:"teacher"})),s.a.createElement("fieldset",{className:"form-group"},s.a.createElement("label",null,"Type"),s.a.createElement(M.b,{className:"form-control",type:"text",name:"type"})),s.a.createElement("fieldset",{className:"form-group"},s.a.createElement("label",null,"Class Day"),s.a.createElement(M.b,{component:"select",name:"classDay"},s.a.createElement("option",{value:"Monday"},"Monday"),s.a.createElement("option",{value:"Tuesday"},"Tuesday"),s.a.createElement("option",{value:"Wednesday"},"Wednesday"),s.a.createElement("option",{value:"Thursday"},"Thursday"),s.a.createElement("option",{value:"Friday"},"Friday"))),s.a.createElement("fieldset",{className:"form-group"},s.a.createElement("label",null,"Class Time"),s.a.createElement(M.b,{className:"form-control",type:"text",name:"classTime"})),s.a.createElement(M.b,{component:"select",name:"course"},e.state.courseList.map(function(e){return s.a.createElement("option",{value:e.name},e.name)})),s.a.createElement("button",{className:"btn btn-success",type:"submit"},"Save"))})))}}]),t}(n.Component),$=function(e){function t(e){var a;return Object(c.a)(this,t),console.log("constructor"),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).state={classList:[],studentName:""},a.addStudentClass=a.addStudentClass.bind(Object(j.a)(Object(j.a)(a))),a.refreshClasses=a.refreshClasses.bind(Object(j.a)(Object(j.a)(a))),a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"addStudentClass",value:function(e){var t=this;B.addStudentClass(this.props.match.params.id,e.studentName).then(function(a){t.setState({message:"Adding of class ".concat(e.type," Successful")}),t.props.history.push("/class")})}},{key:"refreshClasses",value:function(){var e=this,t=y.getLoggedInUserName();B.executeClassPathVariableService(t).then(function(t){e.setState({classList:t.data})})}},{key:"render",value:function(){console.log("render");var e=this.state;return this.refreshClasses(),s.a.createElement("div",null,s.a.createElement("h1",null,"Add Student"),s.a.createElement("div",{className:"container"},s.a.createElement(M.d,{initialValues:e,onSubmit:this.onSubmit,validateOnChange:!1,validateOnBlur:!1,validate:this.addStudentClass,enableReinitialize:!0},function(e){return s.a.createElement(M.c,null,s.a.createElement(M.a,{name:"description",component:"div",className:"alert alert-warning"}),s.a.createElement(M.a,{name:"targetDate",component:"div",className:"alert alert-warning"}),s.a.createElement(M.b,{component:"select",name:"studentName"},s.a.createElement("option",{value:"test"},"test"),s.a.createElement("option",{value:"sept"},"sept")),s.a.createElement("button",{className:"btn btn-success",type:"submit"},"Save"))})))}}]),t}(n.Component),G=function(e){function t(e){var a;return Object(c.a)(this,t),console.log("constructor"),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).state={courseList:[],studentName:""},a.addStudentCourse=a.addStudentCourse.bind(Object(j.a)(Object(j.a)(a))),a.refreshCourses=a.refreshCourses.bind(Object(j.a)(Object(j.a)(a))),a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"addStudentCourse",value:function(e){var t=this;P.addStudentCourse(this.props.match.params.id,e.studentName).then(function(a){t.setState({message:"Adding of course ".concat(e.type," Successful")}),t.props.history.push("/course")})}},{key:"refreshCourses",value:function(){var e=this,t=y.getLoggedInUserName();P.executeCoursePathVariableService(t).then(function(t){e.setState({courseList:t.data})})}},{key:"render",value:function(){console.log("render");var e=this.state;return this.refreshCourses(),s.a.createElement("div",null,s.a.createElement("h1",null,"Add Student"),s.a.createElement("div",{className:"container"},s.a.createElement(M.d,{initialValues:e,onSubmit:this.onSubmit,validateOnChange:!1,validateOnBlur:!1,validate:this.addStudentCourse,enableReinitialize:!0},function(e){return s.a.createElement(M.c,null,s.a.createElement(M.a,{name:"description",component:"div",className:"alert alert-warning"}),s.a.createElement(M.a,{name:"targetDate",component:"div",className:"alert alert-warning"}),s.a.createElement(M.b,{component:"select",name:"studentName"},s.a.createElement("option",{value:"test"},"test"),s.a.createElement("option",{value:"sept"},"sept")),s.a.createElement("button",{className:"btn btn-success",type:"submit"},"Save"))})))}}]),t}(n.Component),Z=function(e){function t(e){var a;return Object(c.a)(this,t),console.log("constructor"),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).state={classList:[]},a.showStudents=a.showStudents.bind(Object(j.a)(Object(j.a)(a))),a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"showStudents",value:function(){var e=this;B.displayStudentsClass(this.props.match.params.id).then(function(t){e.setState({classList:t.data})})}},{key:"backToClass",value:function(){this.props.history.push("/class")}},{key:"render",value:function(){var e=this;return console.log("render"),this.showStudents(),s.a.createElement("div",null,s.a.createElement("h1",null,"Class List"),s.a.createElement("div",{className:"container"},s.a.createElement("table",{className:"table"},s.a.createElement("thead",null,s.a.createElement("tr",null,s.a.createElement("th",null,"Student Usernames"))),s.a.createElement("tbody",null,this.state.classList.map(function(e){return s.a.createElement("tr",null,s.a.createElement("td",null,e))}),s.a.createElement("tr",null,s.a.createElement("td",null,s.a.createElement("button",{className:"btn btn-success",onClick:function(){return e.backToClass()}},"Back to Classes")))))))}}]),t}(n.Component),K=function(e){function t(e){var a;return Object(c.a)(this,t),console.log("constructor"),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).state={courseList:[]},a.showStudents=a.showStudents.bind(Object(j.a)(Object(j.a)(a))),a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"showStudents",value:function(){var e=this;P.displayStudentsCourse(this.props.match.params.id).then(function(t){e.setState({courseList:t.data})})}},{key:"backToCourse",value:function(){this.props.history.push("/course")}},{key:"render",value:function(){var e=this;return console.log("render"),this.showStudents(),s.a.createElement("div",null,s.a.createElement("h1",null,"Course List"),s.a.createElement("div",{className:"container"},s.a.createElement("table",{className:"table"},s.a.createElement("thead",null,s.a.createElement("tr",null,s.a.createElement("th",null,"Student Usernames"))),s.a.createElement("tbody",null,this.state.courseList.map(function(e){return s.a.createElement("tr",null,s.a.createElement("td",null,e))}),s.a.createElement("tr",null,s.a.createElement("td",null,s.a.createElement("button",{className:"btn btn-success",onClick:function(){return e.backToCourse()}},"Back to Courses")))))))}}]),t}(n.Component),Q=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"TodoApp"},s.a.createElement(d.a,null,s.a.createElement(s.a.Fragment,null,s.a.createElement(U,null),s.a.createElement(h.a,null,s.a.createElement(b.a,{path:"/",exact:!0,component:k}),s.a.createElement(b.a,{path:"/login",component:k}),s.a.createElement(C,{path:"/welcome/:name",component:V}),s.a.createElement(C,{path:"/course",component:z}),s.a.createElement(C,{path:"/addcourse",component:F}),s.a.createElement(C,{path:"/addstudentcourse/:id",component:G}),s.a.createElement(C,{path:"/class",component:J}),s.a.createElement(C,{path:"/classlist/:id",component:Z}),s.a.createElement(C,{path:"/courselist/:id",component:K}),s.a.createElement(C,{path:"/studentclass",component:q}),s.a.createElement(C,{path:"/studentcourse",component:_}),s.a.createElement(C,{path:"/addclass",component:H}),s.a.createElement(C,{path:"/addstudentclass/:id",component:$}),s.a.createElement(C,{path:"/todos/:id",component:R}),s.a.createElement(C,{path:"/todos",component:L}),s.a.createElement(C,{path:"/logout",component:I}),s.a.createElement(b.a,{path:"/register",component:W}),s.a.createElement(b.a,{component:T})),s.a.createElement(A,null))))}}]),t}(n.Component),X=(a(73),a(74),function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"App"},s.a.createElement(Q,null))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(s.a.createElement(X,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[39,1,2]]]);
//# sourceMappingURL=main.60d39efc.chunk.js.map