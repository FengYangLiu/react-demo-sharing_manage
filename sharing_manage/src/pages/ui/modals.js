import React, { Component } from 'react';
import { Card, Button, Modal } from 'antd';
import './ui.less';

export default class Modals extends Component{
	state = {
		showModal1: false,
		showModal2: false,
		showModal3: false,
		showModal4: false,
	}

	render(){
		return(
			<div>
				<Card title="基础模态框" className="card-wrap">
					<Button type="parimary" onClick={() => { this.handleOpen('showModal1')}}>open</Button>
					<Button type="parimary" onClick={() => { this.handleOpen('showModal2')}}>自定义页脚</Button>
					<Button type="parimary" onClick={() => { this.handleOpen('showModal3')}}>顶部20px弹框</Button>
					<Button type="parimary" onClick={() => { this.handleOpen('showModal4')}}>水平垂直居中</Button>
					<Modal
						title="React"
						visible={this.state.showModal1}
						onCancel={
							()=>{
								this.setState({
									showModal1: false
								})							
							}
						}
					>
						<p>
							模态框
						</p>
					</Modal>
					<Modal
						title="React"
						visible={this.state.showModal2}
						okText="好的"
						cancelText="算了"
						onCancel={
							()=>{
								this.setState({
									showModal2: false
								})							
							}
						}
					>
						<p>
							模态框
						</p>
					</Modal>
					<Modal
						title="React"
						visible={this.state.showModal3}
						okText="好的"
						cancelText="算了"
						style={{top:20}}
						onCancel={
							()=>{
								this.setState({
									showModal3: false
								})							
							}
						}
					>
						<p>
							模态框
						</p>
					</Modal>
					<Modal
						title="React"
						visible={this.state.showModal4}
						okText="好的"
						cancelText="算了"
						wrapClassName="vertical-center-modal"
						style={{top:20}}
						onCancel={
							()=>{
								this.setState({
									showModal4: false
								})							
							}
						}
					>
						<p>
							模态框
						</p>
					</Modal>
				</Card>

				<Card title="信息确认框" className="card-wrap">
					<Button type="parimary" onClick={() => { this.handleComfirm('confirm')}}>Confirm</Button>
					<Button type="parimary" onClick={() => { this.handleComfirm('info')}}>Info</Button>
					<Button type="parimary" onClick={() => { this.handleComfirm('success')}}>Success</Button>
					<Button type="parimary" onClick={() => { this.handleComfirm('warning')}}>Warning</Button>
					
				</Card>
			</div>
		);
	}

	handleOpen = (type) => {
		this.setState({
			[type]: true
		})
	}
	handleComfirm = (type) => {
		this.setState({
			[type]: true
		})

		Modal[type]({
			title:'确认',
			content:'dasdasd',
			onOk(){
				console.log(1)
			},
			onCancel(){
				console.log(2)
			}
		})
	}
}