import { useRouter } from "next/router"


function compliantDetails() {
  const router = useRouter()
  const {report_id} = router.query
  const myreports = [
    {
        _id:"fkjlaskjdfkl3425",
        City: "Bhopal",
        username_id:'kfjlk253jlk23l432kljkl',
        call_to_action: "fir",
        email: "swastikjain02@gmail.com",
        gender: "male",
        incident_date: 'thru 19 jun 2020',
        report_date:'21 march 2021',
        incident_desciption: "khatri ko maro",
        incident_place: "oriental collge ",
        incident_type: "theft",
        name: "Swastk  jain",
        phone: "08770871745",
        state: "madhya pradesh",
        title:"khatri",
        user: {age: 19},
        replies:[
            {
                admin_id:'kalsfas234kl2314asf',
                admin_name:'niket deshmukh',
                response_date:'12:00 thru may 2021',
                response:['ruk marato hu sale ko',]
                
            }
            
        ]
    },
    {
        City: "Bhopal",
        username_id:'kfjlk253jlk23l432kljkl',
        call_to_action: "fir",
        email: "swastikjain02@gmail.com",
        gender: "male",
        incident_date: 'thru 19 jun 2020',
        report_date: new Date(),
        incident_desciption: "khatri ko maro",
        incident_place: "oriental collge ",
        incident_type: "theft",
        name: "Swastk  jain",
        phone: "08770871745",
        state: "madhya pradesh",
        title:"chain kheech di",
        user: {age: 19},
        response:[
            {
                admin_id:'kalsfas234kl2314asf',
                admin_name:'niket deshmukh',
                response_date:'12:00 thru may 2021',
                response:['ruk marato hu sale ko',]
                
            }
            
        ]
    }
  ]
  const reportDetails = myreports[0]
  return (
    <div>
        <h1>{reportDetails.title}</h1>
        <a >{new Date(reportDetails.report_date).toString()}</a>
        <h2>report Details:</h2>
        <p>reporter name: {reportDetails.name}</p>
        <p>incident Date: {reportDetails.incident_date}</p>
        <p>place: {reportDetails.incident_place}</p>
        <p>description:{reportDetails.incident_desciption}</p>
        <h1>admin Response</h1>
        {reportDetails.replies.map((item)=>{
          return <div>
          <h2>{item.admin_name}</h2>
          <a>{item.response_date}</a>
          <p>{item.response}</p>
          </div>
        })}
    </div>
  )
}

export default compliantDetails