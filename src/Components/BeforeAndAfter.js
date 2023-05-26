import React from "react";
import { Card } from "react-bootstrap";
import Placeholder from "../images/placeholder.svg";

// import Logo from "../images/logo-large.jpg";
import BeforeStyle from "./Before.module.css";

const BeforeAndAfter = () => {
  const innerCardWrapper = BeforeStyle.innerCardWrapper;
  const beforeImg = BeforeStyle.beforeImg;
  const afterImg = BeforeStyle.beforeImg;
  const title = BeforeStyle.title;
  return (
    <>
      <div>
        <Card className={innerCardWrapper}>
          <Card.Body>
            <Card.Title className={title}>Before & After Portfolio</Card.Title>
            <hr/>
            <Card.Title className={title}>Before</Card.Title>
            <Card.Img src={Placeholder} alt="" className={[beforeImg]} />
            <Card.Title className={title}>After</Card.Title>
            <Card.Img src={Placeholder} alt="" className={[afterImg]} />
          </Card.Body>
        </Card>
      </div>
    </>
  );
};
export default BeforeAndAfter;
