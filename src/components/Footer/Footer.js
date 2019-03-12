import React, {Component} from "react";
import { Link } from 'react-router-dom';

class Footer extends Component{
	render(){
		return(
		      <footer className="footer">
		        <div className="container-fluid">
		          <nav>
		            <ul>
		              <li>
							<Link className="simple-text" to="/">SHIPBAY.US</Link>
		              </li>
		            </ul>
		          </nav>
		          <div className="copyright" id="copyright">
		            &copy;
		            <script>
		              ABCDEFGHIJK
		            </script>, Designed by
		            <a href="https://www.invisionapp.com" target="_blank">Invision</a>
		            <a href="https://www.creative-tim.com" target="_blank">Creative Tim</a>.
		          </div>
		        </div>
		      </footer>
		)
	}
}
export default Footer;