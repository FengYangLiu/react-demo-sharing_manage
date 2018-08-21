import React, { Component } from 'react';
import { Row, Col } from 'antd';
import Util from '../../utils/utils'
import axios from '../../axios';
import './index.less';

export default class Header extends Component {
	constructor(props) {
		super(props);
		this.state = {
			userName: 'admin',
			sysTime: ''
		}
	}

	componentWillMount(){
		setInterval(() => {
			let sysTime = Util.formateDate( new Date());
			this.setState({
				sysTime
			})
		}, 1000)
		this.getWeatherAPIData()
	}

	render() {
		return (
			<div className="header">
				<Row className="header-top">
					<Col span="24">
						<span>欢迎, {this.state.userName } </span>
						<a href="#">退出</a>
					</Col>
				</Row>
				<Row className="breadcrumb">
					<Col span="4" className="breadcrumb-title">
						首页
					</Col>
					<Col span="20" className="weather">
						<span className="date">{this.state.sysTime}</span>
						<span className="weather-detail">熔炉</span>
					</Col>
				</Row>
			</div>
		)
	}


	getWeatherAPIData() {
		axios.jsonp({
			url:'https://www.sojson.com/open/api/weather/json.shtml?city=%E6%9D%AD%E5%B7%9E'
		}).then((res) =>{
			console.log(res)
		})
	}
}