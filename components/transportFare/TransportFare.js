import { Table } from "antd";


const data = [
    {
      key: '1',
      fareDetails: 'Booking fee',
      olaFare: 32,
      uberFare:40,
      googleFare: 1000,
    },
    {
      key: '2',
      fareDetails: 'Minimum fare',
      olaFare: 32,
      uberFare:40,
      googleFare: 13200,
    },
    {
      key: '3',
      fareDetails: 'Fare above minimum fare',
      olaFare: 12,
      uberFare:342,
      googleFare: 213,
    },
    {
        key: '4',
        fareDetails: 'Waiting charges per hour',
        olaFare: 32,
        uberFare:40,
        googleFare: 452,
      },
  ]
  const columns = [
    {
        title: 'Fare Details',
        dataIndex: 'fareDetails',
        key: 'fareDetails',
      
      },
    {
      title: 'Ola Fare',
      dataIndex: 'olaFare',
      key: 'OlaFare',
      render: text => <a>{text}</a>,
    },
    {
      title: 'Uber Fare',
      dataIndex: 'uberFare',
      key: 'Uber',
    },
    {
      title: 'Google Fare',
      dataIndex: 'googleFare',
      key: 'google',
    },
   
  ];
  
function TransportFare({data}) {
  return (
    <div>
    <Table  columns={columns} dataSource={data} />
    </div>
  )
}

export default TransportFare