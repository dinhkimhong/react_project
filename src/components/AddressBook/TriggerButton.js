import React, {Component} from 'react';

class TriggerButton extends Component{

	render(){
		return(
			<button
			  className="btn btn-secondary"
			  ref={this.props.buttonRef}
			  onClick={this.props.showModal}
			 >
			 {this.props.triggerText}
			</button>
		)
	}

}
export default TriggerButton;