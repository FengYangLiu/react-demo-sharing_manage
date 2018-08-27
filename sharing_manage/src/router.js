import React, { Component } from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
import Home from './pages/home/index'
import App from './App'
import Admin from './admin';
import Buttons from './pages/ui/buttouns';
import Modals from './pages/ui/modals';
import Loadings from './pages/ui/loadings';
import Notification from './pages/ui/notice'
import Messages from './pages/ui/messages'
import Tabs from './pages/ui/tabs'
import Gallery from './pages/ui/gallery'
import Carousel from './pages/ui/carousel'

import Login from './pages/form/login';
import Register from './pages/form/register';

// import Bar from './pages/echarts/bar'
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
									<Switch>
										<Route path="/admin/ui/buttons" component={ Buttons }></Route>
										<Route path="/admin/ui/modals" component={ Modals }></Route>
										<Route path="/admin/ui/loadings" component={ Loadings }></Route>
										<Route path="/admin/ui/notification" component={ Notification }></Route>
										<Route path="/admin/ui/messages" component={ Messages }></Route>
										<Route path="/admin/ui/tabs" component={ Tabs }></Route>
										<Route path="/admin/ui/gallery" component={ Gallery }></Route>
										<Route path="/admin/ui/carousel" component={ Carousel }></Route>
										<Route path="/admin/form/login" component={ Login }></Route>
										<Route path="/admin/form/reg" component={ Register }></Route>
										{/* <Route path="/admin/charts/bar" component={ Bar }></Route> */}
										<Route component={ NoMatch }></Route>
									</Switch>
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