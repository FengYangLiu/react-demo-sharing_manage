import React, { Component } from "react";
import {
  Card,
  Form,
  Input,
  Button,
  message,
  Checkbox,
  Radio,
  InputNumber,
  Select,
  Switch,
  DatePicker,
  TimePicker,
  Upload,
  Icon
} from "antd";
import moment from "moment";
const FormItem = Form.Item;
const RadioGroup = Radio.Group;
const Option = Select.Option;
const TextArea = Input.TextArea;

function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
}

function beforeUpload(file) {
  const isJPG = file.type === 'image/jpeg';
  if (!isJPG) {
    message.error('You can only upload JPG file!');
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!');
  }
  return isJPG && isLt2M;
}

class FormRegister extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  
  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      lableCol: {
        xs: 24,
        sm: 4
      },
      wraperCol: {
        xs: 24,
        sm: 12
      }
    };
    const imageUrl = this.state.imageUrl;
    const uploadButton = (
      <div>
        <Icon type={this.state.loading ? 'loading' : 'plus'} />
        <div className="ant-upload-text">Upload</div>
      </div>
    );
    return (
      <div>
        <Card title="注册" style={{ marginTop: 10 }}>
          <Form style={{ width: 300 }}>
            <FormItem label="用户名" {...formItemLayout}>
              {getFieldDecorator("userName", {
                initialValue: "11111",
                rules: [
                  {
                    required: true,
                    message: "用户不能为空"
                  }
                ]
              })(<Input placeholder="请输入用户名" />)}
            </FormItem>

            <FormItem label="密码" {...formItemLayout}>
              {getFieldDecorator("userPwd", {
                required: true,
                message: "密码不能为空"
              })(<Input placeholder="请输入密码" />)}
            </FormItem>

            <FormItem label="性别" {...formItemLayout}>
              {getFieldDecorator("sex", {
                initialValue: "1"
              })(
                <RadioGroup>
                  <Radio value="1">男</Radio>
                  <Radio value="2">女</Radio>
                </RadioGroup>
              )}
            </FormItem>

            <FormItem label="性别" {...formItemLayout}>
              {getFieldDecorator("age", {
                initialValue: "23"
              })(<InputNumber />)}
            </FormItem>

            <FormItem label="当前状态" {...formItemLayout}>
              {getFieldDecorator("state", {
                initialValue: "1"
              })(
                <Select>
                  <Option value="1">小菜</Option>
                  <Option value="2">百度FE</Option>
                  <Option value="3">阿里FE</Option>
                  <Option value="4">腾讯FE</Option>
                </Select>
              )}
            </FormItem>

            <FormItem label="爱好" {...formItemLayout}>
              {getFieldDecorator("interest", {
                initialValue: ["3", "4"]
              })(
                <Select mode="multiple">
                  <Option value="1">打滚</Option>
                  <Option value="2">玩泥巴</Option>
                  <Option value="3">爬树</Option>
                  <Option value="4">弹弹珠</Option>
                </Select>
              )}
            </FormItem>

            <FormItem label="是否已婚" {...formItemLayout}>
              {getFieldDecorator("isMarried", {
                valuePropName: "checked",
                initialValue: false
              })(<Switch />)}
            </FormItem>

            <FormItem label="生日" {...formItemLayout}>
              {getFieldDecorator("birthday", {
                initialValue: moment("2018-08-27")
              })(
                // <DatePicker showTime format="YYYY-MM-DD HH:mm:ss" />
                <DatePicker />
              )}
            </FormItem>

            <FormItem label="联系地址" {...formItemLayout}>
              {getFieldDecorator("address", {
                initialValue: moment("2018-08-27")
              })(
                <TextArea
                  autosize={{
                    minRows: 3,
                    maxRows: 6
                  }}
                />
              )}
            </FormItem>

            <FormItem label="早起时间" {...formItemLayout}>
              {getFieldDecorator("time", {
                initialValue: moment("2018-08-27")
              })(
                <TimePicker
                  autosize={{
                    minRows: 3,
                    maxRows: 6
                  }}
                />
              )}
            </FormItem>

            <FormItem label="头像" {...formItemLayout}>
              {getFieldDecorator("userImg", {
                // initialValue: moment("2018-08-27")
              })(
                <Upload
                name="avatar"
                listType="picture-card"
                className="avatar-uploader"
                showUploadList={false}
                action="//jsonplaceholder.typicode.com/posts/"
                beforeUpload={beforeUpload}
                onChange={this.handleChange}
              >
                {imageUrl ? <img src={imageUrl} alt="avatar" /> : uploadButton}
              </Upload>
              )}
            </FormItem>
            
            <FormItem label="头像" {...formItemLayout}>
              {getFieldDecorator("userImg", {
                // initialValue: moment("2018-08-27")
              })(
                <Checkbox>我已阅读过<a>协议</a></Checkbox>
              )}
            </FormItem>

            <FormItem>
              <Button type="primary" onClick={this.handleSubmit}>
                登录
              </Button>
            </FormItem>
          </Form>
        </Card>
      </div>
    );
  }

  handleSubmit = () => {
    let userInfo = this.props.form.getFieldsValue();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        message.success(`${userInfo.userName}使用antdForm`);
      }
    });
  };

  handleChange = (info) => {
    if (info.file.status === 'uploading') {
      this.setState({ loading: true });
      return;
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, imageUrl => this.setState({
        imageUrl,
        loading: false,
      }));
    }
  }

}

export default Form.create()(FormRegister);
