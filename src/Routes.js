import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Estimates from "./pages/Estimates";
import Setting from "./pages/Setting";
import AddressBook from "./pages/AddressBook";
import Orders from "./pages/Orders";
import Tracking from "./pages/Tracking";

 const Routes = () => (
 	<BrowserRouter>
 		<Switch>
 			<Route exact path="/" component={Login} />
 			<Route path="/login" component={Login} />
  			<Route path="/signup" component={SignUp} />			
 			<Route path="/estimates" component={Estimates} />
 			<Route path="/setting" component={Setting} />
 			<Route path="/address_books" component={AddressBook} />
 			<Route path="/orders" component={Orders} />
 			<Route path="/tracking" component={Tracking} />
 		</Switch>
 	</BrowserRouter>
)

export default Routes;