import React,{Component} from "react";
import Nav from "../components/Nav/Nav";
import Sidebar from "../components/Sidebar/Sidebar_Address_Book";
import Footer from "../components/Footer/Footer";
import {Redirect} from "react-router-dom";
import {UserData} from "../services/UserData";
import AddressBookCard from "../components/AddressBook/AddressBookCard";

class AddressBook extends Component{
	constructor(props){
		super(props);
		this.state={
			id: "",
			company:"",
			contact:"",
			address:"",
			city:"",
			province:"",
			country:"",
			postal_code:"",
			tel:"",
			created_by: "",
			redirectToReferrer: false,
			isShownSaveButton: false,
			triggerText:"Edit"
		}
		this.state.contacts = [];
		this.onChange = this.onChange.bind(this);
		this.addContact = this.addContact.bind(this);
		this.getAllContacts = this.getAllContacts.bind(this);
		this.delete = this.delete.bind(this);
		this.clickEdit = this.clickEdit.bind(this);
		this.updateContact = this.updateContact.bind(this);
	}


	componentDidMount(){
		let data = JSON.parse(sessionStorage.getItem("userData"));
		this.setState({ created_by: data.userData.id});
	}

	componentWillMount(){
		if(sessionStorage.getItem("userData")){
			this.getAllContacts();
		} else {
			this.setState({redirectToReferrer: true});
		}
	}

	onChange(e){
		this.setState({[e.target.name]: e.target.value});
		// alert(e.target.value);

	}



	addContact(e){
		e.preventDefault();
		UserData('add_contact',this.state).then((result)=>{
			if(result.contactsData){
				this.setState({contacts:result.contactsData});
				this.setState({
					company:"",
					contact:"",
					address:"",
					city:"",
					province:"",
					country:"",
					postal_code:"",
					tel:""
				})
			} else {
				alert(result.error);
			}
		})
	}

	getAllContacts(){
		let data = JSON.parse(sessionStorage.getItem("userData"));
		let postData = {created_by: data.userData.id}
		if(data){		
			UserData('get_contacts_by_id',postData).then((result)=>{
				this.setState({contacts: result})
			});
		}
	}

	delete(contact){
		let id = contact.id;
		let postData = {contact_id: id};
		UserData('delete_contact', postData).then((result)=>{
			if(result.success){
				this.getAllContacts();
			}else{
				alert(result.error);
			}

		})

	}	


	clickEdit(contact){
		this.setState({
			id: contact.id,
			company:contact.company,
			contact:contact.contact,
			address:contact.address,
			city:contact.city,
			province:contact.province,
			country:contact.country,
			postal_code:contact.postal_code,
			tel:contact.tel,
			isShownSaveButton: true
		})
	}

	updateContact(e){
		e.preventDefault();
		let data = JSON.parse(sessionStorage.getItem("userData"));
		let postData = {
			created_by: data.userData.id,
			id: this.state.id,
			company: this.state.company,
			contact: this.state.contact,
			address: this.state.address,
			city: this.state.city,
			province: this.state.province,
			country: this.state.country,
			postal_code: this.state.postal_code,
			tel: this.state.tel
		}
		UserData('update_contact',postData).then((result)=>{
			if(result.contactsData){
				this.setState({contacts:result.contactsData});
				this.setState({
					company:"",
					contact:"",
					address:"",
					city:"",
					province:"",
					country:"",
					postal_code:"",
					tel:"",					
					isShownSaveButton: false
				});


			} else {
				alert(result.error);
			}
		})	

	}

	render(){
		if(this.state.redirectToReferrer){
			return(<Redirect to={'/login'}/>);
		}

		let changeButton = this.state.isShownSaveButton? <button className="btn btn-info" onClick={this.updateContact}>Save</button> : <button className="btn btn-primary" onClick={this.addContact}>Add new</button>;

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
		                <h5 className="title">Address Book</h5>
		              </div>
		              <div className="card-body">
						<form>
		                  <div className="row">
		                    <div className="col-md-7 pr-1">
		                      <div className="form-group">
		                        <label>Company name</label>
		                        <input type="text" className="form-control" name="company" value={this.state.company} onChange={this.onChange}/>
		                      </div>
		                    </div>
		                    <div className="col-md-5 pl-1">
		                      <div className="form-group">
		                        <label>Contact</label>
		                        <input type="text" className="form-control" name="contact" value={this.state.contact} onChange={this.onChange}/>
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
		                  {changeButton}
		                  
         				</form>

		              </div>
		            </div>

					<AddressBookCard 
						contacts={this.state.contacts}
						delete={this.delete}
						triggerText={this.state.triggerText}
						clickEdit={this.clickEdit}
					/>

		          </div>
		        </div>
		      </div>
				<Footer />
		    </div>
		  </div>
		)
	}
}
export default AddressBook;