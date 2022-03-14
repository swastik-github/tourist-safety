import React, {useEffect, useState } from "react";
import {
  Form,
  InputNumber,
  DatePicker,
  Switch,
  Radio,
  Slider,
  Button,
  Upload,
  Rate,
  Select,
  Input,
  Checkbox,
  Row,
  Col,
} from 'antd';
import axios from 'axios'
import { useRouter } from "next/router";
const { TextArea } = Input;
const { Option } = Select;
function CompliantForm() {
  const router =  useRouter()
  const [userDetails, setUserDetails] = useState({})
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  useEffect(() => {
      const token = localStorage.getItem('token');
      axios.get("http://localhost:1000/protected", {
          headers: {
              Authorization: token,
          }
      }).then(res => {
        console.log(res);
          setUserDetails(res.data.user.user)
      }).catch(err => {
          console.log(err);
          router.replace('/login')
      })
  }, [])

  return (
    <div>
    <a href="">you are {userDetails.name}</a>
    <p>{userDetails.email}</p>
    <h1>Travel Compliant Form</h1>
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
          label="Full name"
          name="name"
          rules={[{ required: true, message: "Please input your name!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: "Please input your Email!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="phone"
          label="Phone Number"
          rules={[
            { required: true, message: "Please input your phone number!" },
          ]}
        >
          <Input addonBefore='+91' style={{ width: "100%" }} />
        </Form.Item>

        <Form.Item
          name="gender"
        
          label="Gender"
          rules={[
            {
              required: true,
              message: "Please select gender",
            },
          ]}
        >
          <Radio.Group>
            <Radio value="male">male</Radio>
            <Radio value="female">female</Radio>
            <Radio value="other">other</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item name={['user', 'age']} label="Age" rules={[{ type: 'number', min: 0, max: 99 }]}>
        <InputNumber /></Form.Item>
       
        <Form.Item
        name="state"
        label="State"
        rules={[{ required: true, message: 'Please select your state!' }]}
      >
        <Select placeholder="Please select a state">
          <Option value="madhya pradesh">madhya pradesh</Option>
          <Option value="UK">UK</Option>
          <Option value="Rajesthan">Rajesthan</Option>
        </Select>
      </Form.Item>
      <Form.Item
          label="city"
          name="City"
          rules={[{ required: true, message: "Please input your city!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item name='incident_date' label="Incident Date">
        <DatePicker />
      </Form.Item>
      <Form.Item
        name="incident_type"
        label="Incident Type"
        rules={[{ required: true, message: 'Please select your incident type!' }]}
      >
        <Select placeholder="Please select">
          <Option value="theft">Theft</Option>
          <Option value="safety">Safety</Option>
          <Option value="hygiene">hygiene</Option>
          <Option value="other">other</Option>
        </Select>
      </Form.Item>
      <Form.Item
          label="Incident Place"
          name="incident_place"
          rules={[{ required: true, message: "Please enter incident place!" }]}
        >
          <TextArea cols={4} minLength={50} />
        </Form.Item>
        <Form.Item
        name="call_to_action"
        label="How Can we Help You"
        rules={[{ required: true, message: 'Please select !' }]}
      >
        <Select placeholder="Please select">
          <Option value="fir">fir</Option>          
        </Select>
      </Form.Item>
      <Form.Item
          label="Title"
          name="incident_title"
          rules={[{ required: true, message: "Please enter title!" }]}
        >
          <Input />
        </Form.Item>
      <Form.Item
      name='incident_desciption'
      label='Incident Details'
      rules={[{ required: true, message: 'Please write minimum 50 character !' }]}
      >
      <TextArea rows={4}/>

      </Form.Item>
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default CompliantForm;
