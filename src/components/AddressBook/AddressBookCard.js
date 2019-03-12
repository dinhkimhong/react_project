import React, {Component} from "react";
import ContactRow from "./ContactRow";

class AddressBookCard extends Component{

	render(){
		const contact = this.props.contacts.map(contact=>{
			return(
				<ContactRow key={contact.id} contact={contact} delete={this.props.delete} triggerText={this.props.triggerText} clickEdit={this.props.clickEdit}/>
				)
		})
		return(
			<div className="row">
		   		<div className="col-md-12">
		            <div className="card">
		              <div className="card-body">
		              	  <div className="table-responsive">
			                  <table className="table">
			                    <thead>
			                      <tr>
			                      	<th>Company name</th>
			                      	<th>Contact</th>
			                      	<th>Full Address</th>
			                      	<th>Action</th>
			                      </tr>
			                    </thead>
			                    <tbody>
			                    	{contact}
			                    </tbody>
			                  </table>
			               </div>
		              </div>
		            </div>
		         </div>
		    </div>
		)
	}
}
export default AddressBookCard;
