import React,{Component} from "react";
import EstimateRow from "./EstimateRow";

class EstimateTable extends Component{
	render(){

		const estimate = this.props.estimates.map(estimate=><EstimateRow key={estimate.id} 
			estimate={estimate}
			deleteEstimate={this.props.deleteEstimate} 
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

		/>)
		return(
			<div className="row">
		   		<div className="col-md-12">
		            <div className="card">
		              <div className="card-body">
		              	  <div className="table-responsive">
			                  <table className="table">
			                    <thead>
			                      <tr>
			                      	<th>Contact</th>
			                      	<th>Date</th>
			                      	<th>Package cost</th>
			                      	<th>Shipping cost</th>
			                      	<th>Action</th>			                      	
			                      </tr>
			                    </thead>
			                    <tbody>
			                    	{estimate}

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
export default EstimateTable;