import About from "../../About/About";
import ChooseMe from "../../ChooseMe/ChooseMe";
import Contact from "../../Contact/Contact";
import Corousel from "../../Corousel/Corousel";
import Prices from "../../Prices/Prices";
import Services from "../../Services/Services";
import ContactMe from "../ContactMe";
import Footer from "../Footer";
import HeroSection from "../HeroSection";
import React, { useEffect, useState } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css'
import Navbar from "../../Navbar/Navbar";
import MyPortfolio from "../../MyPortfolio/MyPortfolio";
import Modal from "../../Modal/Modal";

export default function Home() {
  const [modalImg, setModalImg] = useState('');
  useEffect(() => {
    Aos.init({ duration: 1000 });
}, [])
  return (
    <>
      <HeroSection />
      <ChooseMe></ChooseMe>
      <About></About>
      <Services></Services>
      <MyPortfolio setModalImg={setModalImg} />
      <Corousel></Corousel>
      <Prices></Prices>
      <Contact></Contact>
      {/* <ContactMe /> */}
      <Footer />
      <Modal modalImg={modalImg} />
    </>
  );
}
