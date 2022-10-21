import React, { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import Footer from "../../components/Footer";
import Form from "../../components/Form";
import Goal from "../../components/Goal";
import Header from "../../components/Header";
import WhoWeAre from "../../components/WhoWeAre";
import Works from "../../components/Works";
import Carousel from "../../components/Carousel";

const Landing = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    Aos.init({ duration: 2000, offset: 0 });
  }, []);

  const handleOpenModal = () => {
    setModalIsOpen(true);
  };

  const handleCloseModal = () => {
    setModalIsOpen(false);
  };

  return (
    <>
      <Header />
      <WhoWeAre />
      <Goal />
      <Works handleOpenModal={handleOpenModal} />
      <Form modalIsOpen={modalIsOpen} />
      <Footer />
      <Carousel modalIsOpen={modalIsOpen} onRequestClose={handleCloseModal} />
    </>
  );
};

export default Landing;
