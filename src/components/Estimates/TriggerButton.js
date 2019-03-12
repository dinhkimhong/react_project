import React, {Component} from 'react';

class TriggerButton extends Component{

	render(){
		return(
			<button
			  className= {this.props.triggerText == "Add New Estimate" ? "btn btn-primary" : "btn btn-info"}
			  ref={this.props.buttonRef}
			  onClick={this.props.triggerText == "Add New Estimate" ? ()=>{this.props.showModal();this.props.resetItem()} : 
			  ()=>{this.props.showModal();this.props.getEstimate(this.props.estimate)}}
			 >
			 {this.props.triggerText}
			</button>
		)
	}
}
export default TriggerButton;