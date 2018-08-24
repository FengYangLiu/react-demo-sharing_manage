import React, { Component } from 'react';
import { Card, Button, Radio } from 'antd';
import './ui.less';

export default class Buttons extends Component {
	constructor(props){
		super(props);
		this.state = {
			loading: true
		}
	}
	render (){
		return (
			<div>
				<Card title="基础按钮" className="card-wrap">
					<Button type="primary">xxx</Button>
					<Button>xxx</Button>
					<Button type="dashed">xxx</Button>
					<Button type="danger">xxx</Button>
					<Button disabled>xxx</Button>
				</Card>
				<Card title="图形按钮" className="card-wrap">
					<Button icon="plus">创建</Button>
					<Button icon="edit">编辑</Button>
					<Button icon="delete">删除</Button>
					<Button shape="circle" icon="search"></Button>
					<Button type="primary" icon="search">搜索</Button>
					<Button type="primary" icon="download">下载</Button>					
				</Card>
				<Card title="loadding按钮" className="card-wrap">
					<Button type="primary" loading={this.state.loading}>确定</Button>
					<Button type="primary" shape="circle" loading={this.state.loading}></Button>
					<Button loading={this.state.loading}>点击加载</Button>
					<Button shape="circle" loading={this.state.loading}></Button>
					<Button type="primary" onClick={ this.handleCloseLoading }>关闭</Button>				
				</Card>
				<Card title="按钮组">
					<Button.Group>
						<Button type="primary" icon="left" style={{marginReft:0}}>前进</Button>	
						<Button type="primary" icon="right">后退</Button>	
					</Button.Group>				
				</Card>
				<Card title="按钮尺寸" className="card-wrap">
					<Radio.Group onChange={ this.handleChange}>
						<Radio value="small">小</Radio>
						<Radio value="default">中</Radio>
						<Radio value="large">大</Radio>
					</Radio.Group>			
					<Button type="primary" size={this.state.size}>xxxx</Button>
					<Button type="dashed" size={this.state.size}>xxxx</Button>
					<Button type="danger" size={this.state.size}>xxxx</Button>
				</Card>
			</div>
		)
	}

	handleCloseLoading = () =>{
		this.setState({
			loading: false
		})
	}

	handleChange = (evt)=> {
		this.setState({
			size: evt.target.value
		})
	}

}

