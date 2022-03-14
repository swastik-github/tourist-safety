import { Form, Input, Button, Typography } from "antd";
import { useRouter } from "next/router";
import { useEffect } from "react";
import axios from 'axios'

import { sendError } from "next/dist/server/api-utils";
const { Text } = Typography;

const Login = () => {
  const router = useRouter();
  const onFinish = async (values) => {
    console.log("form working", values);
    try {
      const response = await axios.post("http://localhost:1000/auth/login", values);

      console.log(response,"ressss");
      if(response){
        localStorage.setItem("token", response.data.token);
        router.replace("/compliant/compliantform");

      }else{
        throw new sendError(response)
      }
    
    } catch (error) {
      console.log(error.response.data.message);
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const handleSignup = () => {
    router.replace("register");
  };
  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get("http://localhost:1000/protected", {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => {
        console.log(res);
        router.replace("/compliant/compliantform");
      })
      .catch((err) => {
        console.log(err);
        return;
      });
  }, []);

  return (
    <div>
      <p>
        user?{" "}
        <Text style={{ cursor: "pointer" }} strong onClick={handleSignup}>
          Sign-up
        </Text>
      </p>
      <p>hey this making new git repo</p>
      <p>lets check again</p>

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
          label="Username"
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
    </div>
  );
};

export default Login;
