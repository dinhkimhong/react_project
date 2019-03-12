import React,{Component} from "react";
import Nav from "../components/Nav/Nav";
import Sidebar from "../components/Sidebar/Sidebar_Setting";
import Footer from "../components/Footer/Footer";
import {Redirect} from "react-router-dom";
import {UserData} from "../services/UserData";

class Setting extends Component{
	constructor(){
		super();
		this.state={
			id:"",
			company:"",
			user_name:"",
			email: "",
			position:"",
			title:"",
			first_name:"",
			last_name:"",
			address:"",
			city:"",
			province:"",
			country:"",
			postal_code:"",
			tel:"",
			data:[],
			redirectToReferrer: false,
		}
		this.onChange = this.onChange.bind(this);
		this.getUserData = this.getUserData.bind(this);
		this.saveSetting = this.saveSetting.bind(this);
	}

	componentDidMount(){
		this.getUserData();
	}

	componentWillMount(){
		if(sessionStorage.getItem("userData")){
			this.setState({data:sessionStorage.getItem("userData")})
		} else {
			this.setState({redirectToReferrer: true});
		}
	}

	getUserData(){
		let data = JSON.parse(sessionStorage.getItem("userData"));
		this.setState({
			id: data.userData.id,
			user_name: data.userData.user_name, 
			email: data.userData.email,
			company: data.userData.company,
			position: data.userData.position,
			title: data.userData.title,
			first_name: data.userData.first_name,
			last_name: data.userData.last_name,
			address: data.userData.address,
			city: data.userData.city,
			province: data.userData.province,
			country: data.userData.country,
			postal_code: data.userData.postal_code,
			tel: data.userData.tel,
		})
	}

	onChange(e){
		this.setState({[e.target.name]: e.target.value});
	}

	saveSetting(e){
		e.preventDefault();
		UserData('setting',this.state).then((result)=>{
			if(result.userData){
				sessionStorage.setItem('userData',JSON.stringify(result));
				alert('Update successfully');
			} else {
				alert(result.error);
			}
		})
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
		                <h5 className="title">Edit Profile</h5>
		              </div>
		              <div className="card-body">
		                <form>
		                  <div className="row">
		                    <div className="col-md-5 pr-1">
		                      <div className="form-group">
		                        <label>Company name</label>
		                        <input type="text" className="form-control" name="company" value={this.state.company} onChange={this.onChange}/>
		                      </div>
		                    </div>
		                  </div>
		                  <div className="row">
		                    <div className="col-md-4 pr-1">
		                      <div className="form-group">
		                        <label htmlFor="user_name">Username</label>
		                        <input type="text" className="form-control" name="user_name" value={this.state.user_name} onChange={this.onChange}/>
		                      </div>
		                    </div>
		                    <div className="col-md-4 px-1">
		                      <div className="form-group">
		                        <label htmlFor="email">Email address</label>
		                        <input type="email" className="form-control" name="email" value={this.state.email} onChange={this.onChange} readOnly/>
		                      </div>
		                    </div>
		                    <div className="col-md-4 pl-1">
		                      <div className="form-group">
		                        <label htmlFor="position">Position</label>
		                        <input type="text" className="form-control" name="position" value={this.state.position} onChange={this.onChange}/>
		                      </div>
		                    </div>
		                  </div>
		                  <div className="row">
		                    <div className="col-md-4 pr-1">
		                      <div className="form-group">
		                        <label>Title</label>
								<select className="form-control" name="title" value={this.state.title} onChange={this.onChange}>
									<option value=""></option>
									<option value="Mr">Mr</option>
									<option value="Mrs">Mrs</option>
									<option value="Ms">Ms</option>
								</select>		                        
		                      </div>
		                    </div>
		                    <div className="col-md-4 pl-1">
		                      <div className="form-group">
		                        <label>First Name</label>
		                        <input type="text" className="form-control" name="first_name" value={this.state.first_name} onChange={this.onChange}/>
		                      </div>
		                    </div>
		                    <div className="col-md-4 px-1">
		                      <div className="form-group">
		                        <label>Last Name</label>
		                        <input type="text" className="form-control" name="last_name" value={this.state.last_name} onChange={this.onChange}/>
		                      </div>
		                    </div>
		                  </div>
		                  <div className="row">
		                    <div className="col-md-12">
		                      <div className="form-group">
		                        <label>Address</label>
		                        <input type="text" className="form-control" name="address" value={this.state.address} onChange={this.onChange}/>
		                      </div>
		                    </div>
		                  </div>
		                  <div className="row">
		                    <div className="col-md-3 pr-1">
		                      <div className="form-group">
		                        <label>City</label>
		                        <input type="text" className="form-control" name="city" value={this.state.city} onChange={this.onChange}/>
		                      </div>
		                    </div>
		                    <div className="col-md-3 px-1">
		                      <div className="form-group">
		                        <label>Province</label>
		                        <input type="text" className="form-control" name="province" value={this.state.province} onChange={this.onChange}/>
		                      </div>
		                    </div>		                    
		                    <div className="col-md-2 px-1">
		                      <div className="form-group">
		                        <label>Country</label>
		                        <input type="text" className="form-control" name="country" value={this.state.country} onChange={this.onChange}/>
		                      </div>
		                    </div>
		                    <div className="col-md-2 px-1">
		                      <div className="form-group">
		                        <label>Postal Code</label>
		                        <input type="text" className="form-control" name="postal_code" value={this.state.postal_code} onChange={this.onChange}/>
		                      </div>
		                    </div>
		                    <div className="col-md-2 pl-1">
		                      <div className="form-group">
		                        <label>Telephone no.</label>
		                        <input type="text" className="form-control" name="tel" value={this.state.tel} onChange={this.onChange}/>
		                      </div>
		                    </div>		                    
		                  </div>
		                  <button className="btn btn-primary" onClick={this.saveSetting}>Save</button>
		                  
		                </form>
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
export default Setting;