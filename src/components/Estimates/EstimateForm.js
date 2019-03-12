import React, {Component} from "react";
import {UserData} from "../../services/UserData";
import FormRow from "./FormRow";

class EstimateForm extends Component{
	constructor(){
		super();
		this.state = {
		}

	}


	render(){
		let item = this.props.items.map(item=><FormRow key={item.id} item={item} removeItem={this.props.removeItem} onChange={this.props.onChange}/>);
		let option_contact = this.props.contacts.map(contact=><option value={contact.contact_id} selected={contact.contact_id == this.props.contact_id? "selected" : ""}>{contact.contact}</option>);

		const button = this.props.triggerText == "Add New Estimate" ? <button className="btn btn-primary" onClick={this.props.addEstimate} type="submit">Save</button> :
		<button className="btn btn-info" type="submit" onClick={()=>this.props.editEstimate(this.props.estimate)}>Update</button>;

	    return (
	      <div>
			<div className="row">
		        <div className="col-md-12">
		            <div className="form-group">
		        	    <label>Contact</label>
						<select className="form-control" name="contact_id" value={this.state.contact_id} onChange={this.props.onChange_Out_Table}>
							<option value=""></option>
							{option_contact}
						</select>		            	
		            </div>
		        </div>
		    </div>	

			<div className="row">
		      	<div className="table-responsive">
					<table className="table">
				        <thead>
				            <tr>
				                <th>Item</th>
				                <th>Unit</th>
				                <th>Quantity</th>
				                <th>Unit Cost</th>
				                <th>Total Cost</th>
				                <th><button className="btn btn-primary" onClick={this.props.addItem}>Add</button></th>
				            </tr>
				        </thead>
				       	<tbody>
				            {item}
				        </tbody>
				        <tfoot>
								<tr>
									<td colSpan="3">Total</td>
									<td colSpan="2"><input className="form-control" readOnly value={this.props.total_value}/></td>
								</tr>
								<tr>
									<td>Size <input className="form-control" name="length" placeholder="Length..." value={this.props.length} onChange={this.props.onChange_Out_Table}/> 
									x <input className="form-control" name="width" placeholder="Width..." value={this.props.width} onChange={this.props.onChange_Out_Table}/> 
									x <input className="form-control" name="height" placeholder="Height.." value={this.props.height} onChange={this.props.onChange_Out_Table}/></td>
									<td>Volume <input className="form-control" readOnly value={this.props.volume}/></td>
									<td>Weight <input className="form-control" name="weight" value={this.props.weight} onChange={this.props.onChange_Out_Table}/></td>

								</tr>
								<tr>
									<td colSpan="3">Shipping cost</td>
									<td colSpan="2"><input className="form-control" readOnly value={this.props.shipping_cost}/></td>
								</tr>								

				        </tfoot>
				    </table>
				</div>
			</div>

	      	      	      	      	            
	        <div className="form-group">
			{button}
	      </div>
	      </div>
	    );
  	}
}

export default EstimateForm;