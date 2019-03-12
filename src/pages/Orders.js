import React,{Component} from "react";
import Nav from "../components/Nav/Nav";
import Sidebar from "../components/Sidebar/Sidebar_Order";
import Footer from "../components/Footer/Footer";
import {Redirect} from "react-router-dom";
import {UserData} from "../services/UserData";

class Orders extends Component{
	constructor(){
		super();
		this.state={
			created_by:"",
			redirectToReferrer: false,

		}

	}


	componentDidMount(){
		let data = JSON.parse(sessionStorage.getItem("userData"));
		this.setState({ created_by: data.userData.id});
	}

	componentWillMount(){
		if(sessionStorage.getItem("userData")){

		} else {
			this.setState({redirectToReferrer: true});
		}
	}

	render(){
		if(this.state.redirectToReferrer){
			return(<Redirect to={'/login'}/>);
		}

		return(
		  <div className="wrapper ">
		  	<Sidebar />
		    <div className="main-panel" id="main-panel">
		    	<Nav />
		      <div className="panel-header panel-header-sm">
		      </div>
		      <div className="content">
		        <div className="row">
		          <div className="col-md-12">
		            <div className="card">
		              <div className="card-header">
		                <h5 className="title">Orders</h5>
		              </div>
		              <div className="card-body">
		              </div>
		            </div>

		          </div>
		        </div>
		      </div>
				<Footer />
		    </div>
		  </div>
		)
	}
}
export default Orders;