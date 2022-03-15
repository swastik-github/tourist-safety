import { useRouter } from "next/router";
import { useState, useEffect, Fragment } from "react";
import { Menu } from "antd";
import getConfig from "next/config";
import axios from "axios";
import { Collapse } from "antd";
import classes from "./placedetail.module.css";
import { Typography } from "antd";
import { Element, scroller } from "react-scroll";
const { Title, Text } = Typography;
const { serverRuntimeConfig, publicRuntimeConfig } = getConfig();
import { Divider } from "antd";
import Safety from "../../components/Safety/Safety";
import Weather from "../../components/weather/Weather";
import CovidCases from "../../components/covidcases/CovidCases";
import TransportFare from "../../components/transportFare/TransportFare";

const { Panel } = Collapse;

function PlaceDetails() {
  const [selectedInfo, setSelectedInfo] = useState(0);
  const placeData = [
    {
      id: 1,
      place_name: "Hawa Mahal",
      city: "jaipur",
      state: "Rajesthan",
      photo:
        "https://www.holidify.com/images/cmsuploads/compressed/h4_20170822181427.PNG",
      overview:
        "Entry to the Hawa Mahal is free on four days of the year: Rajastha Diwas (30 March), World Heritage Day (18 April), International Museum Day (18 May) and World Tourism Day (27 September).The Hawa Mahal is open from 9 a.m. until 4:30 p.m. daily. An hour is enough time to visit it and the small museum inside it. You can also drive by the monument at night to see it beautifully illuminated.",
      overallRisk: "High",
      nauralDisasterRisk: "Low",
      transportRisk: "Medium",
      theftRisk: "Low",
      womenTravelRisk: "Medium",
      weatherInfo: {
        Jan: 10,
        Feb: 14,
        Far: 18,
        Apr: 22,
        May: 25,
        Jun: 32,
        Jul: 28,
        Aug: 25,
        Sep: 22,
        Oct: 17,
        Nov: 15,
        Dec: 12,
      },
      nearByFacilities: { numHotelsNearBy: 23, numHospitalsNearBy: 12 },
      transportFare: [
        {
          key: "1",
          fareDetails: "Booking fee",
          olaFare: 32,
          uberFare: 40,
          googleFare: 1000,
        },
        {
          key: "2",
          fareDetails: "Minimum fare",
          olaFare: 32,
          uberFare: 40,
          googleFare: 13200,
        },
        {
          key: "3",
          fareDetails: "Fare above minimum fare",
          olaFare: 12,
          uberFare: 342,
          googleFare: 213,
        },
        {
          key: "4",
          fareDetails: "Waiting charges per hour",
          olaFare: 32,
          uberFare: 40,
          googleFare: 452,
        },
      ],
    },
  ];
  const router = useRouter();
  const { id } = router.query;
  const [placeInfo, setPlaceInfo] = useState({});
  const [photoLink, setPhotoLink] = useState("");
  console.log("heyye" + id);
  
    useEffect(async () => {
      if(router.isReady){
      console.log("heyye" + id);
      const res = await axios(`http://localhost:1000/placedetails/${id}`);
  
      console.log(res.data);
      setPlaceInfo(res.data[1]);
      setPhotoLink(res.data[0]);
    }
    }, [id]);
  

 
  
 

  function handleSelectedInfo(e) {
    setSelectedInfo(e.key);
    scroller.scrollTo(e.key, {
      spy: true,
      smooth: true,
    });
  }
  console.log(photoLink, "ohohoto");
  return (
    <Fragment>
      {placeInfo.address_components ? (
        <div>
          <img src={photoLink} alt="place" />
          <div>
            <div>
              <Title style={{margin:"0"}} >{placeInfo?.name}</Title>
              <Text >{`${placeInfo?.vicinity }`}</Text>
            </div>
          </div>
          <div style={{marginTop:"20px"}} className={classes.stickyMenu}>
            <Menu
              onClick={handleSelectedInfo}
              selectedKeys={selectedInfo}
              mode="horizontal"
            >
              <Menu.Item key="0">Overview</Menu.Item>
              <Menu.Item key="1">Safety</Menu.Item>
              <Menu.Item key="2">Facilities Near By</Menu.Item>
              <Menu.Item key="3">Fare Pricing</Menu.Item>
              <Menu.Item key="4">Review</Menu.Item>
            </Menu>
          </div>
          <div className="grid">
            <div style={{marginTop:"20px"}} >
              <Element  name="0">
                <h1>Overview</h1>
                <Text>{placeInfo?.reviews  ? placeInfo.reviews[0].text : ""}</Text>
                <div style={{marginTop:"20px"}}  >

               
                <p><Text strong>
                full address: 
                </Text> {`${
                  placeInfo?.formatted_address
                    ? placeInfo?.formatted_address
                    : " not avalilable"
                }`}</p>
                <p>
                <Text strong>
                phone number: 
                </Text> 
                  {`${
                    placeInfo?.formatted_phone_number
                      ? placeInfo?.formatted_phone_number
                      : " not avaliable "
                  }`}
                </p>
                <p>
                <Text strong>
                International phone number: 
                </Text> 
                  {`${
                    placeInfo?.international_phone_number
                      ? placeInfo?.international_phone_number
                      : " not avaliable "
                  } `}
                </p>
                <p>
                <Text strong>
                opening hours: 
                </Text> 
                  {`
                    ${
                      placeInfo?.opening_hours?.weekday_text[0]
                        ? placeInfo?.opening_hours?.weekday_text[0]
                        : "not avaliable "
                    }  
                    `}
                </p>
                <p>
                <Text strong>
                website: 
                </Text> 
                  {` ${
                    placeInfo?.website ? placeInfo?.website : "not avaliable "
                  } `}
                </p>
                </div>
              </Element>
              <Divider />
            </div>

            <div>
              <Collapse defaultActiveKey={["1"]}>
                <Panel header="Local emergency contacts" key="1">
                  <h3>National Emergency Number</h3>
                  <p>Call 112.</p>
                  <h3>Medical emergencies</h3>
                  <p>Call 102.</p>
                  <h3>Tourist Helpline</h3>
                  <p>Call 1363.</p>
                </Panel>
              </Collapse>
            </div>
            {/* <div>
          <Title>Full Advice</Title>
          <div id="Safety">
            <Title level={2}>Safety</Title>
            <Element name="1">
              <Safety
                overallRisk={placeInfo.overallRisk}
                nauralDisasterRisk={placeInfo.nauralDisasterRisk}
                theftRisk={placeInfo.theftRisk}
                transportRisk={placeInfo.transportRisk}
                womenTravelRisk={placeInfo.womenTravelRisk}
              />
            </Element>
          </div>
        </div>
        <div>
          <Weather city={placeInfo.city} weatherInfo={placeInfo.weatherInfo} />
        </div>
        <div>
          <Text style={{ fontSize: "36px" }}>Facilities Near By</Text>
          <div>
            <div className={classes.facilityBox}>
              <img
                className={classes.facilityIcon}
                src="/images/icons/building.png"
                alt=""
              />
              <p
                className={classes.facilityFont}
              >{`${placeInfo.nearByFacilities.numHotelsNearBy} hotels avaliable near the place`}</p>
            </div>
            <div className={classes.facilityBox}>
              <img src="/images/icons/hospital.png" alt="" />
              <p
                className={classes.facilityFont}
              >{`${placeInfo.nearByFacilities.numHospitalsNearBy} avaliable under 15Km Radius`}</p>
            </div>
          </div>
        </div>*/}
            <div>
              <CovidCases
                activeCases={2334}
                totalStateCases={324321}
                fatelCases={234}
              />
            </div>
          </div>
          {/* <div>
        <Element name="3">
          <TransportFare data={placeInfo.transportFare} />
        </Element>
      </div>  */}
        </div>
      ) : (
        <p>loading...</p>
      )}
    </Fragment>
  );
}

export default PlaceDetails;
