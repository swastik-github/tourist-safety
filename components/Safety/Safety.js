import React from "react";
import { Typography } from "antd";
const { Text } = Typography;
function Safety({
  overallRisk,
  nauralDisasterRisk,
  transportRisk,
  theftRisk,
  womenTravelRisk,
}) {

  function riskLevel(level) {
    if (level == "High") {
      return "danger";
    } else if (level == "Low") {
      return "success";
    } else if (level == "Medium") {
      return "warning";
    }
  }
  return (
    <div>
      <h2>Safety</h2>
      <div>
        <div>
          <img src="/images/icons/overallrisk.png" alt="overall risk" />
          <Text>
            Overall Risk: <Text type={riskLevel(overallRisk)} >{`${overallRisk}`}</Text>
          </Text>
        </div>
        <div>
          <img src="/images/icons/naturald.png" alt="natural d" />
          <Text>
            Naural Disaster: <Text type={riskLevel(nauralDisasterRisk)} >{`${nauralDisasterRisk}`}</Text>
          </Text>
        </div>
        <div>
          <img src="/images/icons/transportRisk.png" alt="natural d" />
          <Text>
            Transport Risk: <Text type={riskLevel(transportRisk)} >{`${transportRisk}`}</Text>
          </Text>
        </div>
        <div>
          <img src="/images/icons/theft.png" alt="natural d" />
          <Text>
            Theft Risk: <Text type={riskLevel(theftRisk)} >{`${theftRisk}`}</Text>
          </Text>
        </div>
        <div>
          <img src="/images/icons/womensafety.png" alt="natural d" />
          <Text>
            Women Travel Risk:<Text type={riskLevel(womenTravelRisk)} >{`${womenTravelRisk}`}</Text>
          </Text>
        </div>
      </div>
    </div>
  );
}

export default Safety;
