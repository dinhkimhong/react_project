import React,{Component} from "react";

class FormRow extends Component{

	render(){
		const{id,item,unit,quantity,cost,amount} = this.props.item;
		return(
			<tr>
			     <td><input type="text" id={id} className="form-control" value={item} name="item" onChange={this.props.onChange}/></td>         
			     <td><input type="text" id={id} className="form-control" value={unit} name="unit" onChange={this.props.onChange}/></td> 										
			     <td><input type="number" id={id} className="form-control" value={quantity} name="quantity" onChange={this.props.onChange}/></td> 
			     <td><input type="number" id={id} className="form-control" value={cost} name="cost" onChange={this.props.onChange}/></td> 
			     <td><input type="text" className="form-control" value={amount}/></td> 
			     <td><button className="btn btn-danger" onClick={()=>this.props.removeItem(this.props.item)}>X</button></td> 			     			     			     
			</tr>
		)
	}
}

export default FormRow;