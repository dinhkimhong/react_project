import React, {Component} from "react";

class ContactRow extends Component{

	render(){
		const {company,contact,address,city,province,country,postal_code} = this.props.contact;
		return(
			<tr>
				<td>{company}</td>
				<td>{contact}</td>
				<td>{address}, {city}, {province},{country},{postal_code}</td>
				<td><button className="btn btn-info" onClick={()=>this.props.clickEdit(this.props.contact)}>Edit</button> 
				<button className="btn btn-danger" onClick={()=>this.props.delete(this.props.contact)}>Delete</button>

				</td>
			</tr>												
		)
	}
}
export default ContactRow;