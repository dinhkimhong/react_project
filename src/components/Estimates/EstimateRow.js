import React,{Component} from "react";
import Container from "./Container";

class EstimateRow extends Component{
	render(){
		const{contact, created_at, package_cost,shipping_cost} = this.props.estimate;
		return(
			<tr>
				<td>{contact}</td>
				<td>{created_at}</td>
				<td>{package_cost}</td>
				<td>{shipping_cost}</td>
				<td><Container 
						estimate={this.props.estimate}
						triggerText="Edit" 
						getEstimate={this.props.getEstimate}
							items={this.props.items} addItem={this.addItem} 
							contact_id={this.props.contact_id}
							length={this.props.length}
							width={this.props.width}
							height={this.props.height}
							weight={this.props.weight}
							volume={this.props.volume}
							total_value={this.props.total_value}
							shipping_cost={this.props.shipping_cost}
							contacts={this.props.contacts}							
							removeItem={this.props.removeItem} 
							onChange={this.props.onChange}
							onChange_Out_Table={this.props.onChange_Out_Table}	
							editEstimate={this.props.editEstimate}	
				/>
				<button className="btn btn-danger" onClick={()=>this.props.deleteEstimate(this.props.estimate)}>Delete</button></td>																
			</tr>
		)
	}
}
export default EstimateRow;