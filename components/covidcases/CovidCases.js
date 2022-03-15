import { Typography } from "antd";
import { Fragment } from "react";
import classes from "./covid.module.css";
const { Text, Title } = Typography;
function CovidCases({ totalStateCases, activeCases, fatelCases }) {
  return (
    <Fragment>
      <Title>Covid Cases</Title>
      <Text style={{ display: "block" }} strong>
        Total confirmed cases In Rajesthan
      </Text>
      <Text type={"danger"} strong style={{ fontSize: "36px" }}>
        {totalStateCases}
      </Text>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <div className={classes.activedot}></div>
            <Text>Active Cases</Text>
          </div>
          <p>{activeCases}</p>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <div className={classes.fateldot}></div>
            <Text>Fatal cases</Text>
          </div>
          <p>{fatelCases}</p>
        </div>


        
      </div>
    </Fragment>
  );
}

export default CovidCases;
