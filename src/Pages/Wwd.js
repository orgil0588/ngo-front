import React from "react";
import Navbar from "../Components/Navbar";
import Container from "../Components/Container";
import WhatWeDo from "../Components/WhatWeDo";
import Footer from "../Components/Footer";
function Wwd() {
  return (
    <>
      <Container>
        <Navbar />
        <WhatWeDo hidden="hidden" />
      </Container>
      <Footer />
    </>
  );
}

export default Wwd;
