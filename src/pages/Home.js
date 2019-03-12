import React, {Component} from "react";
import "./Home.css";
import {Redirect} from "react-router-dom";

class Home extends Component{
	render(){
		if(sessionStorage.getItem("userData")){
			return (<Redirect to={'/estimates'} />);
		}
		return(
			<div className="bg">
				<h1>HOME PAGE</h1>
			</div>
		)
	}
}
export default Home;