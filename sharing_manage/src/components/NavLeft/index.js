import React, { Component } from 'react';
import MenuConfig from '../../config/menuConfig';
import { Menu } from 'antd';

import './index.less';

const SubMenu = Menu.SubMenu;

export default class NavLeft extends Component {
	componentWillMount() {
		const menuTree = this.renderMenu(MenuConfig)
		this.setState({
			menuTree
		})
	}
	renderMenu = (data) => {
		return data.map((item)=>{
			if(item.children){
				return (
					<SubMenu title={item.title} key={item.key}>
						{ this.renderMenu(item.children) }
					</SubMenu>
				)
			}
			return (<Menu.Item title={item.title} key={item.key}>{item.title}</Menu.Item>)
		})
	}

	render() {
		return (
			<div>
				<div className="logo">
					<img src="/assets/logo-ant.svg" alt="logo" />
					<h1>imooc</h1>
				</div>
				
				<Menu mode="vertical" theme="dark">
					{/* <SubMenu key="sub1" title={<span><Icon type="appstore"></Icon><span>Navigation Two</span></span>} >
						<Menu.Item key="9">Option 9</Menu.Item>
						<Menu.Item key="10">Option 10</Menu.Item>
						<Menu.Item key="11">Option 11</Menu.Item>
						<Menu.Item key="12">Option 12</Menu.Item>
					</SubMenu>
					<SubMenu key="sub2"></SubMenu>
					<SubMenu key="sub3">
					</SubMenu> */}
					{ this.state.menuTree }
				</Menu>
			</div>
		)
	}
}