import React,{Component} from "react";
import {Redirect} from "react-router-dom";
import {UserData} from "../services/UserData";
import { Link } from 'react-router-dom';
import "./Login.css";

class Login extends Component{
	constructor(){
		super();
		this.state = {
			email: "",
			password: "",
			redirectToReferrer: false
		};

		this.onChange = this.onChange.bind(this);
		this.login = this.login.bind(this);

	}

	login(e){
		e.preventDefault();
		if(this.state.email && this.state.password){
			UserData('login',this.state).then((result)=>{
				let responseJson = result;
				if(responseJson.userData){
					sessionStorage.setItem('userData',JSON.stringify(responseJson));
					this.setState({redirectToReferrer: true})
				} else {
					alert(result.error);
				}
			})
		}
	}

	onChange(e){
		this.setState({[e.target.name]: e.target.value});
	}

	render(){
		if(this.state.redirectToReferrer){
			return (<Redirect to={'/estimates'} />);
		}
		if(sessionStorage.getItem("userData")){
			return (<Redirect to={'/estimates'} />);
		}

		return(
			<div className="bg">
				<div className="form-content">
					<h3>Login</h3>
					<form action="">
						  <div className="form-group">
						    <label htmlFor="email">Email address</label>
						    <input type="email" name="email" className="form-control" id="email" onChange={this.onChange} />
						  </div>
						  <div className="form-group">
						    <label htmlFor="password">Password</label>
						    <input type="password" name="password" className="form-control" id="password" onChange={this.onChange}/>
						  </div>
						  <button type="submit" className="btn btn-primary" onClick={this.login}>Login</button>
						   <Link to="/signup"><button className="btn btn-warning">Signup</button></Link> 
					</form>
				</div>
			</div>
		)
	}
}
export default Login;


