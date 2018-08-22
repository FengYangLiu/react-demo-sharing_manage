import React, { Component } from 'react';
import {HashRouter, Route} from 'react-router-dom';
import Home from './pages/home/index'
import App from './App'
import Admin from './admin';
import Buttons from './pages/ui/buttouns';
import NoMatch from './pages/nomatch';

export default class IRouter extends Component {
	render() {
		return (
			<HashRouter>
				<App>
					{/* <Router path="/login" component={Login}></Router> */}
					<Route path="/admin"
						
						render={()=>{
							return (
								<Admin>
									<Route path="/admin/ui/buttons" component={ Buttons }></Route>
									<Route component={ NoMatch }></Route>
								</Admin>
							)
						}}>
					</Route>
					<Route path="/home" component={Home}></Route>
				</App>
			</HashRouter>
		)
	}
}