import "./Login.less"

import { Button, Form, Input, message } from "antd"
import { Store } from "antd/lib/form/interface"
import React from "react"

import { useLogin } from "@/domainHooks/useLogin"

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 }
}
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 }
}

export const Login = () => {
  const [form] = Form.useForm()

  const { loading, login } = useLogin()

  const onFinish = async (values: Store) => {
    const result = await login(values.username, values.password)
    message.success(`Login ${result.success ? "success" : "fail"} with username: ${values.username}`)
  }

  const onCanel = () => {
    form.resetFields()
  }

  return (
    <Form {...layout} form={form} name="control-hooks" onFinish={onFinish}>
      <Form.Item name="username" label="Username" rules={[{ required: true }]}>
        <Input />
      </Form.Item>

      <Form.Item name="password" label="Password" rules={[{ required: true }]}>
        <Input type="password" />
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit" loading={loading}>
          Submit
        </Button>
        <Button htmlType="button" onClick={onCanel}>
          Cancel
        </Button>
      </Form.Item>
    </Form>
  )
}
