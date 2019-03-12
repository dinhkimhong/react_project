import React, { Component } from 'react';
import Modal from './Modal';
import TriggerButton from './TriggerButton';

class Container extends Component {
	constructor(){
		super();
		this.state = {
			isShown: false,
		}
		this.showModal = this.showModal.bind(this);
		this.closeModal = this.closeModal.bind(this);
		this.onKeyDown = this.onKeyDown.bind(this);
		this.onClickOutside = this.onClickOutside.bind(this);
		this.toggleScrollLock = this.toggleScrollLock.bind(this);
	}

	showModal(){
	  	this.setState({ isShown: true }, () => {
	  		this.closeButton.focus();
		});
		this.toggleScrollLock();
	};

	closeModal(){
	  this.setState({ isShown: false });
	  this.TriggerButton.focus();
	  this.toggleScrollLock();
	};

	onKeyDown(e){
	if (e.keyCode === 27) {
	  this.closeModal();
	  }
	};


	onClickOutside(e){
	 if (this.modal && this.modal.contains(e.target)) return;
	 this.closeModal();
	 };


	toggleScrollLock(){
	 document.querySelector('html').classList.toggle('scroll-lock');
	};

	render() {
		return (
		  <React.Fragment>
		  <TriggerButton
		    showModal={this.showModal}
		    buttonRef={(n) => (this.TriggerButton = n)}
		    triggerText={this.props.triggerText}
		   />
			{this.state.isShown ? (
			  <Modal
			  modalRef={(n) => (this.modal = n)}
			  buttonRef={(n) => (this.closeButton = n)}
			  closeModal={this.closeModal}
			  onKeyDown={this.onKeyDown}
			  onClickOutside={this.onClickOutside}
			  contact={this.props.contact}
			  />
			) : null}
			</React.Fragment>
	  );
 	}
}
export default Container;