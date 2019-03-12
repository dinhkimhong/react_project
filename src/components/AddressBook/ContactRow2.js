import React, {Component} from "react";
import Container from "./Container";

class ContactRow extends Component{



	render(){
		const {company,contact,address,city,province,country,postal_code} = this.props.contact;
		return(
			<tr>
				<td>{company}</td>
				<td>{contact}</td>
				<td>{address}, {city}, {province},{country},{postal_code}</td>
				<td><Container triggerText={this.props.triggerText} contact={this.props.contact} />  
				<button className="btn btn-danger" onClick={()=>this.props.delete(this.props.contact)}>Delete</button>

				</td>
			</tr>												
		)
	}
}
export default ContactRow;