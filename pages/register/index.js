import { Form, Input, Button, Checkbox } from "antd";
import axios from 'axios'
import { useRouter } from "next/router";

 function Register() {
  const route = useRouter()
  const onFinish = async(values) => {
    console.log("Success:", values);
    const response = await axios.post('http://localhost:1000/auth/register', values)
    if(response.status ==200){
      route.replace('/login')
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:--", errorInfo);
  };

  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
     <Form.Item
        label="Name"
        name="name"
        rules={[{ required: true, message: "Please input your name!" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Email"
        name="email"
        rules={[{ required: true, message: "Please input your username!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}

export default Register;
