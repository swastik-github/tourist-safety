import classes from "./header.module.css";
import { GiHamburgerMenu } from "react-icons/gi";
import Link from "next/link";
import { Fragment } from "react";
import { Input, Select, AutoComplete } from "antd";
const { Option } = Select;
function Header() {
  return (
    <Fragment>
      {/* <div className={classes["main-image"]}></div> */}
      <div className={classes.navbar}>
      <div className={classes.navbarbox}>
     
        <div className={classes.main_logo}>
          <h2>TRAVEL</h2>
        </div>
        <div className={classes.hamburger}>
            <GiHamburgerMenu />
          </div>
        <div>
          <div className={classes.deskvw_tags}>
            <a>Staying safe</a>
            <a>Destinations</a>
            <a>COVID-19</a>
            <button>
            Our services
          </button>
          <button>
            Compilents
          </button>
          </div>
          <div>
         
          </div>
        </div>
        </div>
      </div>
      {/* <div>
        <div className={classes.searchbar}>
          <Input.Group compact className={classes.searchbarinput} size="large">
            <Select
              defaultValue="Sign Up"
              style={{ width: "30%" }}
              size="large"
            >
              <Option value="Sign Up">Madhya pradesh</Option>
              <Option value="Sign In">Bihar</Option>
            </Select>
            <AutoComplete
              size="large"
              style={{ width: "70%" }}
              placeholder="places"
              options={[{ value: "text 1" }, { value: "text 2" }]}
            />
          </Input.Group>
        </div>
      </div> */}
    </Fragment>
  );
}
export default Header;
