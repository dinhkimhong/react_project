import React,{Component} from "react";
import {Redirect} from "react-router-dom";
import {UserData} from "../services/UserData";
import "./Login.css";

class SignUp extends Component{
	constructor(){
		super();
		this.state = {
			user_name:"",
			email: "",
			password: "",
			confirm_password: "",
			redirectToReferrer: false
		};

		this.onChange = this.onChange.bind(this);
		this.signup = this.signup.bind(this);
	}

	signup(e){
		e.preventDefault();
		UserData('signup',this.state).then((result)=>{
			if(result.success){
				// sessionStorage.setItem('userData',JSON.stringify(responseJson));
				this.setState({redirectToReferrer: true})
				alert(result.success);
			} else {
				alert(result.error);
			}
		})

	}


	onChange(e){
		this.setState({[e.target.name]: e.target.value});
	}

	render(){
		if(this.state.redirectToReferrer){
			return (<Redirect to={'/login'} />);
		}

		if(sessionStorage.getItem("userData")){
			return (<Redirect to={'/dashboard'} />);
		}

		return(
			<div className="bg">
				<div className="form-content">
					<h3>Sign Up</h3>
					<form action="">
						<div className="form-group">
						    <label htmlFor="user_name">User Name</label>
						    <input type="text" name="user_name" className="form-control" id="user_name" onChange={this.onChange} />
						  </div>
						  <div className="form-group">
						    <label htmlFor="email">Email address</label>
						    <input type="email" name="email" className="form-control" id="email" onChange={this.onChange} />
						  </div>
						  <div className="form-group">
						    <label htmlFor="password">Password</label>
						    <input type="password" name="password" className="form-control" id="password" onChange={this.onChange}/>
						  </div>
						  <div className="form-group">
						    <label htmlFor="confirm_password">Confirm Password</label>
						    <input type="password" name="confirm_password" className="form-control" id="confirm_password" onChange={this.onChange}/>
						  </div>						  
						  <button type="submit" className="btn btn-warning" onClick={this.signup}>Sign Up</button>
					</form>
				</div>
			</div>
		)
	}
}
export default SignUp;


