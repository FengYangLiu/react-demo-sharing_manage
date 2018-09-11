import React from 'react';
import { Card, Table, Modal, Button, message} from 'antd';
import axios from '../../axios'
import Utils from '../../utils/utils';
export default class HighTable extends React.Component{

    state={
        dataSource2:[]
    }


    componentDidMount(){
        const data = [
            {
                id:'0',
                userName:'Jack',
                sex:'1',
                state:'1',
                interest:'1',
                birthday:'2000-01-01',
                address:'北京市海淀区奥林匹克公园',
                time:'09:00'
            },
            {
                id: '1',
                userName: 'Tom',
                sex: '1',
                state: '1',
                interest: '1',
                birthday: '2000-01-01',
                address: '北京市海淀区奥林匹克公园',
                time: '09:00'
            },
            {
                id: '2',
                userName: 'Lily',
                sex: '1',
                state: '1',
                interest: '1',
                birthday: '2000-01-01',
                address: '北京市海淀区奥林匹克公园',
                time: '09:00'
            },
        ]
        data.forEach((item,index)=>{
            item.key = index;
        })
        this.setState({
            dataSource: data
        })
        this.request();
    }

    // 动态获取mock数据
    request = ()=>{
        axios.ajax({
            url:'/table/list',
            data:{
                // params:{
                //     page:1
                // }
            }
        }).then((res)=>{
            if(res.code === 0){
                res.result.list.forEach((item, index) => {
                    item.key = index;
                })
                this.setState({
                    dataSource2:res.result.list,
                    dataSource:res.result.list,
                })
            }
        })
    }

    handleChange = (paginatioin, filters, sorter) => {
        this.setState({
            sortOrder:sorter.order
        });
    }
    hanleClickButton = (item) => {
        let id = item.id;
        Modal.confirm({
            title:'确认',
            content: `您确认要删除${id}么`,
            onOk: () => { 
                message.success('删除成功')
                this.request();
            }
        })
    }

    render(){
        const columns = [
            {
                title:'id',
                key:'id',
                dataIndex:'id',
                width:80
            },
            {
                title: '用户名',
                key: 'userName',
                dataIndex: 'userName',
                width:80
            },
            {
                title: '性别',
                key: 'sex',
                dataIndex: 'sex',
                width:80,
                render(sex){
                    return sex === 1 ?'男':'女'
                }
            },
            {
                title: '状态',
                key: 'state',
                dataIndex: 'state',
                width:80,
                render(state){
                    let config  = {
                        '1':'咸鱼一条',
                        '2':'风华浪子',
                        '3':'北大才子',
                        '4':'百度FE',
                        '5':'创业者'
                    }
                    return config[state];
                }
            },
            {
                title: '爱好',
                key: 'interest',
                dataIndex: 'interest',
                width:80,
                render(abc) {
                    let config = {
                        '1': '游泳',
                        '2': '打篮球',
                        '3': '踢足球',
                        '4': '跑步',
                        '5': '爬山',
                        '6': '骑行',
                        '7': '桌球',
                        '8': '麦霸'
                    }
                    return config[abc];
                }
            },
            {
                title: '生日',
                key: 'birthday',
                dataIndex: 'birthday',
                width:80,
            },
            {
                title: '地址',
                key: 'address',
                dataIndex: 'address',
                width:80,
            },
            {
                title: '早起时间',
                key: 'time',
                dataIndex: 'time',
                width:80,
            }
        ]
        const columns2 = [
            {
                title:'id',
                key:'id',
                dataIndex:'id',
                width:80,
                fixed:'left'
            },
            {
                title: '用户名',
                key: 'userName',
                dataIndex: 'userName',
                width:80,
                fixed:'left'
            },
            {
                title: '性别',
                key: 'sex',
                dataIndex: 'sex',
                width:80,
                render(sex){
                    return sex === 1 ?'男':'女'
                }
            },
            {
                title: '状态',
                key: 'state',
                dataIndex: 'state',
                width:80,
                render(state){
                    let config  = {
                        '1':'咸鱼一条',
                        '2':'风华浪子',
                        '3':'北大才子',
                        '4':'百度FE',
                        '5':'创业者'
                    }
                    return config[state];
                }
            },
            {
                title: '爱好',
                key: 'interest',
                dataIndex: 'interest',
                width:80,
                render(abc) {
                    let config = {
                        '1': '游泳',
                        '2': '打篮球',
                        '3': '踢足球',
                        '4': '跑步',
                        '5': '爬山',
                        '6': '骑行',
                        '7': '桌球',
                        '8': '麦霸'
                    }
                    return config[abc];
                }
            },
            {
                title: '生日',
                key: 'birthday',
                dataIndex: 'birthday',
                width:80,
            },
            {
                title: '地址',
                key: 'address',
                dataIndex: 'address',
                width:80,
            },
            {
                title: '地址',
                key: 'address',
                dataIndex: 'address',
                width:80,
            },
            {
                title: '地址',
                key: 'address',
                dataIndex: 'address',
                width:80,
            },
            {
                title: '地址',
                key: 'address',
                dataIndex: 'address',
                width:80,
            },
            {
                title: '地址',
                key: 'address',
                dataIndex: 'address',
                width:80,
            },
            {
                title: '地址',
                key: 'address',
                dataIndex: 'address',
                width:80,
            },
            {
                title: '地址',
                key: 'address',
                dataIndex: 'address',
                width:80,
            },
            {
                title: '地址',
                key: 'address',
                dataIndex: 'address',
                width:80,
            },
            {
                title: '早起时间',
                key: 'time',
                dataIndex: 'time',
                width:80,
                fixed:'right'
            }
        ]
      
        const columns3 = [
            {
                title:'id',
                key:'id',
                dataIndex:'id',
                width:80,
                sorter:(a,b) => {
                    return a.id - b.id;
                },
                sortOrder: this.state.sortOrder
            },
            {
                title: '用户名',
                key: 'userName',
                dataIndex: 'userName',
                width:80
            },
            {
                title: '性别',
                key: 'sex',
                dataIndex: 'sex',
                width:80,
                render(sex){
                    return sex === 1 ?'男':'女'
                }
            },
            {
                title: '状态',
                key: 'state',
                dataIndex: 'state',
                width:80,
                render(state){
                    let config  = {
                        '1':'咸鱼一条',
                        '2':'风华浪子',
                        '3':'北大才子',
                        '4':'百度FE',
                        '5':'创业者'
                    }
                    return config[state];
                }
            },
            {
                title: '爱好',
                key: 'interest',
                dataIndex: 'interest',
                width:80,
                render(abc) {
                    let config = {
                        '1': '游泳',
                        '2': '打篮球',
                        '3': '踢足球',
                        '4': '跑步',
                        '5': '爬山',
                        '6': '骑行',
                        '7': '桌球',
                        '8': '麦霸'
                    }
                    return config[abc];
                }
            },
            {
                title: '生日',
                key: 'birthday',
                dataIndex: 'birthday',
                width:80,
            },
            {
                title: '地址',
                key: 'address',
                dataIndex: 'address',
                width:80,
            },
            {
                title: '早起时间',
                key: 'time',
                dataIndex: 'time',
                width:80,
            }
        ]
        const columns4 = [
            {
                title:'id',
                dataIndex:'id',
                width:80,
            },
            {
                title: '用户名',
                dataIndex: 'userName',
                width:80
            },
            {
                title: '性别',
                dataIndex: 'sex',
                width:80,
                render(sex){
                    return sex === 1 ?'男':'女'
                }
            },
            {
                title: '状态',
                dataIndex: 'state',
                width:80,
                render(state){
                    let config  = {
                        '1':'咸鱼一条',
                        '2':'风华浪子',
                        '3':'北大才子',
                        '4':'百度FE',
                        '5':'创业者'
                    }
                    return config[state];
                }
            },
            {
                title: '爱好',
                dataIndex: 'interest',
                width:80,
                render(abc) {
                    let config = {
                        '1': '游泳',
                        '2': '打篮球',
                        '3': '踢足球',
                        '4': '跑步',
                        '5': '爬山',
                        '6': '骑行',
                        '7': '桌球',
                        '8': '麦霸'
                    }
                    return config[abc];
                }
            },
            {
                title: '生日',
                key: 'birthday',
                dataIndex: 'birthday',
                width:80,
            },
            {
                title: '地址',
                key: 'address',
                dataIndex: 'address',
                width:80,
            },
            {
                title: '操作',
                width:80,
                render:(text, item)=>{
                    return (
                        <Button size="small" onClick={() => {
                            this.hanleClickButton(item)
                        }}>
                            删除
                        </Button>
                    )
                }
            }
        ]
        
        return (
            <div>
                <Card title="头部固定">
                    <Table 
                        bordered
                        columns={columns}
                        dataSource={this.state.dataSource}
                        pagination={false}
                        scroll={{y:240}}
                    />
                </Card>
                <Card title="左侧固定" style={{margin:'10px 0'}}>
                    <Table
                        bordered
                        columns={columns2}
                        dataSource={this.state.dataSource2}
                        pagination={false}
                        scroll={{x:1200}}
                    />
                </Card>
                <Card title="排序" style={{margin:'10px 0'}}>
                    <Table
                        bordered
                        columns={columns3}
                        dataSource={this.state.dataSource2}
                        pagination={false}
                        onChange={this.handleChange}
                    />
                </Card>
                <Card title="渲染按钮" style={{margin:'10px 0'}}>
                    <Table
                        bordered
                        columns={columns4}
                        dataSource={this.state.dataSource2}
                        pagination={false}
                        onChange={this.handleChange}
                    />
                </Card>
            </div>
        );
    }
}