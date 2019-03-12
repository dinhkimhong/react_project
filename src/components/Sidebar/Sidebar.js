import React, {Component} from "react";
import { Link } from 'react-router-dom';

class Sidebar extends Component{
	render(){
		return(
    <div className="sidebar" data-color="black">
      <div className="logo">
        <Link className="simple-text logo-normal" to="/">SHIPBAY.US</Link>
      </div>
      <div className="sidebar-wrapper" id="sidebar-wrapper">
        <ul className="nav">
          <li className="active">
            <Link to="/estimates">
              <i className="now-ui-icons design_app"></i>
              <p>Estimates</p>
            </Link>  
          </li>
          <li>
            <Link to="/orders">
              <i className="now-ui-icons education_atom"></i>
              <p>Orders</p>
            </Link>            
          </li>
          <li>
            <Link to="/tracking">
              <i className="now-ui-icons location_map-big"></i>
              <p>Tracking</p>
            </Link>           
          </li>
          <li>
            <Link to="/address_books">
              <i className="now-ui-icons design_bullet-list-67"></i>
              <p>Address Books</p>
            </Link>           
          </li>
          <li>
            <Link to="/setting">
              <i className="now-ui-icons users_single-02"></i>
              <p>User Profile</p>
            </Link>           
          </li>
        </ul>
      </div>
    </div>
		)
	}

}
export default Sidebar;