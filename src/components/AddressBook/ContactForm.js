import React, {Component} from "react";
import {UserData} from "../../services/UserData";

class ContactForm extends Component{
	constructor(props){
		super(props);
		this.state = {
			id: props.contact.id,
			company: props.contact.company,
			contact: props.contact.contact,
			address: props.contact.address,
			city: props.contact.city,
			province: props.contact.province,
			country: props.contact.country,
			postal_code: props.contact.postal_code,
			tel: props.contact.tel
		}

		this.onEdit = this.onEdit.bind(this);
		this.updateContact = this.updateContact.bind(this);
	}

	onEdit(e){
		this.setState({[e.target.name] : e.target.value});
	}

	updateContact(e){
		e.preventDefault();
		UserData('update_contact',this.state).then((result)=>{
			if(result.success){
				alert(result.success);
			} else {
				alert(result.error);
			}
		})	

	}	

	render(){
	    return (
	      <form>
			<div className="row">
		        <div className="col-md-7 pr-1">
		            <div className="form-group">
		        	    <label>Company name</label>
		            	<input type="text" className="form-control" name="company" value={this.state.company} onChange={this.onEdit}/>
		            </div>
		        </div>
		        <div className="col-md-5 pl-1">
		                <div className="form-group">
		                   	<label>Contact</label>
		                    <input type="text" className="form-control" name="contact" value={this.state.contact} onChange={this.onEdit}/>
		                </div>
		        </div>		                    
		    </div>
		                  <div className="row">
		                    <div className="col-md-12">
		                      <div className="form-group">
		                        <label>Address</label>
		                        <input type="text" className="form-control" name="address" value={this.state.address} onChange={this.onEdit}/>
		                      </div>
		                    </div>
		                  </div>
		                  <div className="row">
		                    <div className="col-md-4 pr-1">
		                      <div className="form-group">
		                        <label>City</label>
		                        <input type="text" className="form-control" name="city" value={this.state.city} onChange={this.onEdit}/>
		                      </div>
		                    </div>
		                    <div className="col-md-4 px-1">
		                      <div className="form-group">
		                        <label>Province</label>
		                        <input type="text" className="form-control" name="province" value={this.state.province} onChange={this.onEdit}/>
		                      </div>
		                    </div>		                    
		                    <div className="col-md-4 pl-1">
		                      <div className="form-group">
		                        <label>Country</label>
		                        <input type="text" className="form-control" name="country" value={this.state.country} onChange={this.onEdit}/>
		                      </div>
		                    </div>
                   
		                  </div>



			<div className="row">
		        <div className="col-md-6 pr-1">
		            <div className="form-group">
		        	    <label>Postal Code</label>
		            	<input type="text" className="form-control" name="postal_code" value={this.state.postal_code} onChange={this.onEdit}/>
		            </div>
		        </div>
		        <div className="col-md-6 pl-1">
		                <div className="form-group">
		                   	<label>Telephone no</label>
		                    <input type="text" className="form-control" name="tel" value={this.state.tel} onChange={this.onEdit} />
		                </div>
		        </div>		                    
		    </div>	      	      	      	      	            
	        <div className="form-group">
	          <button className="btn btn-primary" type="submit" onClick={this.updateContact}>
	            Save
	          </button>
	      </div>
	      </form>
	    );
  	}
}

export default ContactForm;