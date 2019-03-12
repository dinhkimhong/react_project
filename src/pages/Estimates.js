import React,{Component} from "react";
import Nav from "../components/Nav/Nav";
import Sidebar from "../components/Sidebar/Sidebar";
import Footer from "../components/Footer/Footer";
import {Redirect} from "react-router-dom";
import {UserData} from "../services/UserData";
import Container from "../components/Estimates/Container";
import EstimateTable from "../components/Estimates/EstimateTable";

class Estimates extends Component{
	constructor(){
		super();
		this.state={
			id:"",
			contact_id:"1",
			length:"",
			width:"",
			height:"",
			weight:"",
			volume:"",
			total_value:"",
			shipping_cost:"",
			created_by:"",
			redirectToReferrer: false
		}
		this.state.items=[];
		this.state.contacts=[];
		this.state.estimates=[];
		this.addItem = this.addItem.bind(this);
		this.removeItem = this.removeItem.bind(this);
		this.onChange = this.onChange.bind(this);
		this.onChange_Out_Table = this.onChange_Out_Table.bind(this);
		this.addEstimate = this.addEstimate.bind(this);
		this.deleteEstimate = this.deleteEstimate.bind(this);
		this.getEstimate = this.getEstimate.bind(this);
		this.resetItem = this.resetItem.bind(this);
		this.editEstimate = this.editEstimate.bind(this);
	}


	componentDidMount(){
		let data = JSON.parse(sessionStorage.getItem("userData"));
		this.setState({ created_by: data.userData.id});
	}

	componentWillMount(){
		if(sessionStorage.getItem("userData")){
			this.getItemAmount();
			this.getTotalValue();
			this.getEstimateById();
			this.getContactById();
		} else {
			this.setState({redirectToReferrer: true});
		}
	}

	getItemAmount(){
		this.setState(prevState=>{
			const updateItems = prevState.items.map(item=>{
				item.amount = item.quantity * item.cost;
				return item;
			})
			return{
				items: updateItems
			}
		})

	}

	getVolume(){
		this.setState({volume: this.state.length * this.state.width * this.state.height})		
	}

	addItem(){
		let id = Math.floor(Math.random()*1000000);
		let item = {
			id: id,
			item:"",
			unit:"",
			quantity:"",
			cost:"",
			amount:""
		}
		this.state.items.push(item);
		this.setState(this.state.items);
		this.getTotalValue();
	}

	removeItem(item){
		var index = this.state.items.indexOf(item);
		this.state.items.splice(index,1);
		this.setState(this.state.items);
		this.getTotalValue();
	}

	onChange(e){
		let newItem = {
			id: e.target.id,
			name: e.target.name,
			value: e.target.value
		}

		this.setState(prevState =>{
			let updateItems = prevState.items.map(item=>{
				for (var key in item){
					if(key == newItem.name && item.id == newItem.id){
						item[key] = newItem.value;
						item.amount = item.quantity * item.cost;
					}
				}
				return item;
			})
			return{
				items: updateItems

			}
		})
		this.getTotalValue();
	}

	onChange_Out_Table(e){
		this.setState({[e.target.name]: e.target.value},function(){
			this.getVolume();			
		})

	}


	getTotalValue(){
		let total = 0;
		this.setState(prevState=>{
			let updateValue = prevState.items.map(item=>{
				total = total + item.amount;
			})
			return{
				total_value: total,
			}
		})
	}

	addEstimate(){
		UserData('add_estimate',this.state).then((result)=>{
			if(result){
				this.setState({estimates: result});
				this.resetItem();
			} else {
				alert(result.error);
			}
		})
	}

	getEstimateById(){
		let data = JSON.parse(sessionStorage.getItem("userData"));
		let postData = { created_by: data.userData.id};
		UserData('get_estimate_by_user_id',postData).then((result)=>{
			if(result){
				this.setState({estimates: result});
			} else {
				alert(result.error);
			}
		})		
	}

	getContactById(){
		let data = JSON.parse(sessionStorage.getItem("userData"));
		let postData = { created_by: data.userData.id};
		UserData('get_contact_by_user_id',postData).then((result)=>{
			if(result){
				this.setState({contacts: result});
			} else {
				alert("Wrong");
			}
		})		
	}

	deleteEstimate(estimate){
		let id = estimate.id;
		let postData = {estimate_id: id}
		UserData('delete_estimate',postData).then((result)=>{
			if(result){
				this.getEstimateById();
			} else {
				alert(result.error);
			}
		})		
	}

	getEstimate(estimate){
		let id = estimate.id;
		let postData = {estimate_id: id}
		UserData('get_estimate',postData).then((result)=>{
			if(result){
				this.setState({items: result.items, contact_id: result.contact_id, id: result.id, length: result.length, width: result.width, height: result.height, weight: result.weight});
				this.getItemAmount();
				this.getTotalValue();
				this.getVolume();
			} else {
				alert(result.error);
			}
		})
	}

	resetItem(){
		this.setState({items: [], contact_id: "", id: "", length: "", width: "", height: "", weight: "",total_value:"",volume:"",shipping_cost:""});
	}

	editEstimate(estimate){
		this.deleteEstimate(estimate);
		this.addEstimate();

	}

	render(){
		if(this.state.redirectToReferrer){
			return(<Redirect to={'/login'}/>);
		}

		return(
		  <div className="wrapper ">
		  	<Sidebar />
		    <div className="main-panel" id="main-panel">
		    	<Nav />
		      <div className="panel-header panel-header-sm">
		      </div>
		      <div className="content">
		        <div className="row">
		          <div className="col-md-12">
		            <div className="card">
		              <div className="card-header">
		                <h5 className="title">Estimates</h5>
		              </div>
		              <div className="card-body">
						<Container 
							triggerText="Add New Estimate" 
							items={this.state.items} addItem={this.addItem} 
								length={this.state.length}
							width={this.state.width}
							height={this.state.height}
							weight={this.state.weight}
							volume={this.state.volume}
							total_value={this.state.total_value}
							shipping_cost={this.state.shipping_cost}
							contacts={this.state.contacts}							
							removeItem={this.removeItem} 
							onChange={this.onChange}
							onChange_Out_Table={this.onChange_Out_Table}
							addEstimate={this.addEstimate}
							resetItem={this.resetItem}
							/>
						<EstimateTable 
						estimates={this.state.estimates} 
						deleteEstimate={this.deleteEstimate} 
						getEstimate={this.getEstimate}

							items={this.state.items} addItem={this.addItem} 
							contact_id={this.state.contact_id}
							length={this.state.length}
							width={this.state.width}
							height={this.state.height}
							weight={this.state.weight}
							volume={this.state.volume}
							total_value={this.state.total_value}
							shipping_cost={this.state.shipping_cost}
							contacts={this.state.contacts}							
							removeItem={this.removeItem} 
							onChange={this.onChange}
							onChange_Out_Table={this.onChange_Out_Table}
							editEstimate={this.editEstimate}

						/>

		              </div>
		     

		            </div>

		          </div>
		        </div>
		      </div>
				<Footer />
		    </div>
		  </div>
		)
	}
}
export default Estimates;