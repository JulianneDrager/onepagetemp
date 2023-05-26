import React from "react";
import Header from "./Header";
import Nav from "./ui/Nav";

import { Container } from "react-bootstrap";
import About from "./About";
import BeforeAndAfter from "./BeforeAndAfter";
import Contact from "./Contact";

const Screen = () => {
  return (
    <>
      <Container className="p-0">
        <Nav />
        <Header />
        <About />
        <BeforeAndAfter/>
        <Contact/>
      </Container>
    </>
  );
};
export default Screen;
