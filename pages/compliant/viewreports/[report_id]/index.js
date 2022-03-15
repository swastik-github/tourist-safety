import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from 'axios'
function compliantDetails() {
  const [reportDetails, setreportDetails] = useState({});
  const router = useRouter();
  const { report_id } = router.query;
  console.log(report_id, "outsideuse eff");
  useEffect(() => {
    if(!router.isReady) return;
    const token = localStorage.getItem("token");
    axios
      .get(`http://localhost:1000/complaint/viewcomplaints/${report_id}`, {
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
  return (
    <div>
      <h1>{reportDetails.title}</h1>
      <a>{new Date(reportDetails.report_date).toString()}</a>
      <h2>report Details:</h2>
      <p>reporter name: {reportDetails.name}</p>
      <p>incident Date: {reportDetails.incident_date}</p>
      <p>place: {reportDetails.incident_place}</p>
      <p>description:{reportDetails.incident_desciption}</p>
      <h1>admin Response</h1>
      {reportDetails.admin_response?.map((item) => {
        return (
          <div>
            <h2>{item.admin_name}</h2>
            <a>{item.response_date}</a>
            <p>{item.message}</p>
          </div>
        );
      })}
    </div>
  );
}

export default compliantDetails;
