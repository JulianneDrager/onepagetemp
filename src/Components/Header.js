import React from "react";
import { Card, Button} from "react-bootstrap";

import Logo from "../images/logo-large.jpg";
import HedaerStyle from "./Header.module.css";

const Header = () => {
  const cardwrapper = HedaerStyle.cardwrapper;
  const innerCardWrapper = HedaerStyle.innerCardWrapper
  const cardBody = HedaerStyle.cardBody;
  const logo = HedaerStyle.logo;
  const slogin = HedaerStyle.slogin;
  const subText = HedaerStyle.subText;
  const smSubText = HedaerStyle.smSubText;
  const btn = HedaerStyle.btn;
  return (
    <>
        <Card className={cardwrapper}>
          <Card className={innerCardWrapper}>
            <Card.Body className={cardBody}>
              <Card.Img src={Logo} alt="" className={logo} />
              <Card.Title className={slogin}>Done Bright Done Right</Card.Title>
              <Card.Text className={subText}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco
              </Card.Text>
              <Card.Text className={smSubText}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Card.Text>
              <Button className={btn}>DO SOMETHING</Button>
            </Card.Body>
          </Card>
        </Card>
    </>
  );
};
export default Header;
