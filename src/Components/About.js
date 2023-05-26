import React from "react";
import { Card } from "react-bootstrap";
import Placeholder from "../images/placeholder.svg";

// import Logo from "../images/logo-large.jpg";
import HedaerStyle from "./Header.module.css";
import AboutStyle from "./About.module.css";

const About = () => {
  const cardWrapper = HedaerStyle.cardwrapper;
  const innerCardWrapper = HedaerStyle.innerCardWrapper;
  const cardBody = AboutStyle.cardBody;
  const aboutUsImg = AboutStyle.aboutUsImg;
  const aboutUs = AboutStyle.aboutUs;
  const subText = HedaerStyle.subText;

  return (
    <>
      <div>
        <Card className={cardWrapper}>
          <Card className={innerCardWrapper}>
            <Card.Body className={cardBody}>
              <Card.Title className={aboutUs}>About Us</Card.Title>
              <Card.Img src={Placeholder} alt="" className={[aboutUsImg]} />

              <Card.Text className={subText}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco
              </Card.Text>
            </Card.Body>
          </Card>
        </Card>
      </div>
    </>
  );
};
export default About;
