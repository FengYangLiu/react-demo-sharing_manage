import React, { Component } from "react";
import { Card, Form, Input, Button, message, Checkbox } from "antd";
const FormItem = Form.Item;

class FormLogin extends Component {
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div>
        <Card title="表单-行内-登录">
          <Form layout="inline">
            <FormItem>
              <Input placeholder="请输入用户名" />
            </FormItem>
            <FormItem>
              <Input placeholder="请输入密码" />
            </FormItem>
            <FormItem>
              <Button type="primary">登录</Button>
            </FormItem>
          </Form>
        </Card>
        <Card title="表单-垂直-登录" style={{ marginTop: 10 }}>
          <Form style={{ width: 300 }}>
            <FormItem>
              {getFieldDecorator("userName", {
                initialValue: "11111",
                rules: [{
					required:true,
					message:'用户不能为空'
				}]
              })(<Input placeholder="请输入用户名" />)}
            </FormItem>
            <FormItem>
              <Input placeholder="请输入密码" />
            </FormItem>

			<FormItem>
			  {
				  getFieldDecorator('remember', {
					  initialValue:true,
					  valuePropName: 'checked'
				  })(
					  <Checkbox>记住密码</Checkbox>
				  )
			  }
			  <a style={{float:'right'}}>忘记密码</a>
            </FormItem>

            <FormItem>
              <Button type="primary" onClick={this.handleSubmit}>登录</Button>
            </FormItem>
          </Form>
        </Card>
      </div>
    );
  }

  handleSubmit = ()=>{
	  let userInfo = this.props.form.getFieldsValue();
	  this.props.form.validateFields((err, values) => {
		  if (!err) {
			message.success(`${userInfo.userName}使用antdForm`)
		  }
	  })
  }
}

export default Form.create()(FormLogin);
