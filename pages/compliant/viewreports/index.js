
import { List } from "antd";
import { useRouter } from "next/router";
function ViewUserReport() {

    const router = useRouter();
   

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
        response:[
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
        prefix: undefined,
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

  function handleClick(report_id) {
    router.push('viewreports/'+ report_id)
  }

  return (
    <div>
      <List
        size="large"
        itemLayout="vertical"
        dataSource={myreports}
        renderItem={(item, index) => (
          <List.Item style={{ fontSize: "14px" }}>
            <h3
              onClick={() => {
                handleClick(item._id);
              }}
            >
              <a>{item.title}</a>
            </h3>

            <p>{new Date(item.report_date).toString()}</p>
          </List.Item>
        )}
      />
    </div>
  );
}

export default ViewUserReport;
