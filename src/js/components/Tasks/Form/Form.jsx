import React, {Component} from 'react'
import { Form, Icon, Input, Button, Checkbox } from 'antd';

const FormItem = Form.Item;

class NormalLoginForm extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.afterSubmit(values.taskBody)
        // dispatch new item
        // close the modal
      }
    });
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit}>
        <FormItem>
          {getFieldDecorator('taskBody', {
            rules: [{ required: true, message: 'you must fill this field!' }],
          })(
            <Input prefix={<Icon type="edit" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="wrtie your task here..." />
          )}
        </FormItem>

          <Button type="primary" htmlType="submit">
            Save
          </Button>
      </Form>
    );
  }
}

const WrappedNormalLoginForm = Form.create()(NormalLoginForm);

export default WrappedNormalLoginForm