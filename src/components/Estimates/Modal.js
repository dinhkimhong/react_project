import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import EstimateForm from './EstimateForm';
import FocusTrap from 'focus-trap-react';

class Modal extends Component{
  render(){
    return ReactDOM.createPortal(
      <FocusTrap>
        <aside
        tag="aside"
        role="dialog"
        tabIndex="-1"
        aria-modal="true"
        className="modal-cover"
        onClick={this.props.onClickOutside}
        onKeyDown={this.props.onKeyDown}
        >
          <div className="modal-area" ref={this.props.modalRef}>
            <button
              ref={this.props.buttonRef}
              aria-label="Close Modal"
              aria-labelledby="close-modal"
              className="_modal-close"
              onClick={this.props.closeModal}
            >
            <span id="close-modal" className="_hide-visual">
            Close
            </span>
            <svg className="_modal-close-icon" viewBox="0 0 40 40">
            <path d="M 10,10 L 30,30 M 30,10 L 10,30" />
            </svg>
            </button>

            <div className="modal-body">


              <EstimateForm items={this.props.items} addItem={this.props.addItem} removeItem={this.props.removeItem} onChange={this.props.onChange}
                contact_id={this.props.contact_id}  
                length={this.props.length}
                width={this.props.width}
                height={this.props.height}
                weight={this.props.weight}
                volume={this.props.volume}
                total_value={this.props.total_value}
                shipping_cost={this.props.shipping_cost}
                contacts={this.props.contacts}
                onChange_Out_Table={this.props.onChange_Out_Table}
                addEstimate={this.props.addEstimate}
              triggerText={this.props.triggerText}
              estimate={this.props.estimate}
              editEstimate={this.props.editEstimate}           

              />
            </div>
         </div>
         </aside>
       </FocusTrap>,
      document.body
    );
  }
}

export default Modal;