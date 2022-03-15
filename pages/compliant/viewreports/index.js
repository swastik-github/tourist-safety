import { List, Typography } from "antd";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from 'axios'
const {Text}= Typography
function ViewUserReport() {
  const router = useRouter();
  const [reportDetails, setreportDetails] = useState([]);
  function handleClick(report_id) {
    router.push("viewreports/" + report_id);
    console.log( report_id);
  }
  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get("http://localhost:1000/complaint/viewcomplaints", {
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
  }, []);
  let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  return (
    <div>
      <List
        size="large"
        itemLayout="vertical"
        dataSource={reportDetails}
        renderItem={(item, index) => (
          <List.Item style={{ fontSize: "14px" }}>
            <h3
            style={{margin:"0"}}
              onClick={() => {
                handleClick(item._id);
              }}
            >
              <a>{item.title}</a>  
            </h3>
            <Text>{item.name}</Text>
            <p><Text >Report Date: </Text> {new Date(item.report_date).toLocaleDateString("en-US", options)}</p>
          </List.Item>
        )}
      />
    </div>
  );
}

export default ViewUserReport;
