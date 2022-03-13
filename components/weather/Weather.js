import { Typography } from 'antd';
const { Text, Title } = Typography;
import classes from './weather.module.css'
function Weather({ city, weatherInfo }) {
  let averageWeather = 0;
  let weatherData = [];

  Object.entries(weatherInfo).forEach(([key, value], i) => {
    averageWeather += value;
    weatherData.push({ id: i, month: key, temp: value });
  });
  averageWeather = averageWeather / 12;

  return (
    <div>
      <Title level={4} >{`${city} Weather Averages (Temperatures)`}</Title>
      <div style={{ width: "500px" }}>
        {weatherData.map((item, i) => {
          return (
            <div
            key={i}
              style={{
                position:"relative",
                width: "100%",
                height: "20px",
                backgroundColor: "#D9D9D9",
                margin: "5px 0",
              }}
            >
              <div
                style={{
                  width: (item.temp / averageWeather) * 150,
                  backgroundColor: "#FCBE53",
                  height: "20px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    position:'absolute',
                    display: "flex",
                    width:item.temp<0?0: ((item.temp / averageWeather) * 150 )+60,
                    margin:'0 10px',
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Text>{item.month}</Text>

                  <div  style={{backgroundColor:'black',padding:"0 8px", height:"20px"}}>
                  <Text className={classes.temp} style={{color:"white"}} >{item.temp}&#8451;</Text>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Weather;
