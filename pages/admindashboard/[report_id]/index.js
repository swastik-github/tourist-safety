import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";
import { Form,Input,List,Button } from "antd";

function compliantDetails() {
  const [reportDetails, setreportDetails] = useState({});
  const [toggleInputBox, settoggleInputBox] = useState(false);
  const router = useRouter();
  const { TextArea} = Input
  const { report_id } = router.query;
  useEffect(() => {
    if(!router.isReady) return;

    const token = localStorage.getItem("token");
    axios
      .get(`http://localhost:1000/admindashboard/${report_id}`, {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => {
        console.log(res);
        setreportDetails(res.data.reports);
      })
      .catch((err) => {
        console.log(err);
        router.replace("/login");
      });
  }, [router.isReady]);

  const onFinish = values => {
    console.log('Received values of form:', values);
    const token = localStorage.getItem("token");
    console.log(report_id,"report id");
    axios
      .post(`http://localhost:1000/admindashboard/report/${report_id}`,values, {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => {
        console.log(res);
        setreportDetails(res.data.updated_data);
      })
      .catch((err) => {
        console.log(err.data.message);
        router.replace("/login");
      });
      settoggleInputBox(false)
  };


  return (
    <div>
      <h1>{reportDetails?.title}</h1>
      <a>{new Date(reportDetails?.report_date).toString()}</a>
      <h2>report Details:</h2>
      <p>reporter name: {reportDetails?.name}</p>
      <p>incident Date: {reportDetails?.incident_date}</p>
      <p>place: {reportDetails?.incident_place}</p>
      <p>description:{reportDetails?.incident_desciption}</p>
      <h1>admin Response</h1>

      {reportDetails?.admin_response?<List
        itemLayout="vertical"
        dataSource={reportDetails.admin_response}
        renderItem={(item, index) => (
          <List.Item style={{ fontSize: "14px" }}>
            <div>
              <h2>{item.admin_name}</h2>
              <a>{item.response_date}</a>
              <p>{item.message}</p>
            </div>
          </List.Item>
        )}
      />:<p>reply to user</p>}
      {toggleInputBox? <div>
      <Form
      onFinish={onFinish}
      >
      <Form.Item
      name='admin_name'
      placeholder="name"
      required={true}
      >
      <Input placeholder="your name" />
      </Form.Item>
      <Form.Item
      name='message'
      placeholder="respond"
      required={true}
      >
      <TextArea rows={6}  />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
      
      </Form>
      
      </div> : <button onClick={()=> settoggleInputBox(true)} >give reponse</button>}
    </div>
  );
}

export default compliantDetails;
