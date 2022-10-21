import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import logo from "../../assets/images/Logo Pequena.svg";
import Button from "../shared/Button";

const Footer = () => {
  return (
    <section id="footer" className="relative">
      <div className="bg-primary-blue-print-500 flex flex-col sm:flex-row justify-center items-center sm:items-start sm:justify-around py-28">
        <div data-aos="fade-right" className="w-8/12 sm:w-5/12">
          <h1 className="text-lg md:text-xl lg:text-2xl xl:text-3xl text-white font-bold">
            Nosso Endereço
          </h1>
          <p className="text-neutral-very-light-gray text-md lg:text-lg xl:text-xl leading-7 md:my-2 lg:my-4 font-light">
            Rua Des.Frota, 285,
            <br />
            Parque São José, Fortaleza -<br />
            CE, 60730-270
          </p>
          <a
            href="https://goo.gl/maps/EeEJ2f3YicDedZJP8"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-very-light-gray text-md lg:text-lg xl:text-xl leading-5 mb-7 underline flex font-light items-center"
          >
            Ver no mapa <AiOutlineArrowRight className="ml-1" />
          </a>
        </div>
        <div data-aos="fade-left" className="w-8/12 sm:w-5/12">
          <h1 className="text-lg md:text-xl lg:text-2xl xl:text-3xl text-white  mb-4 lg:mb-6 font-bold">
            Para mais informações, entre em contato:
          </h1>
          <div className="w-11/12">
            <Button
              title="Nosso Whatsapp"
              backgroundColor="bg-primary-green-print-100"
              hover="hover:bg-primary-green-print-200"
              href="https://wa.me/5585991001754"
              whatsapp={true}
              target="_blank"
            />
          </div>
        </div>
      </div>
      <div className="bg-primary-blue-print-400 w-full h-full flex sm:flex-row flex-col sm:justify-around items-center py-6">
        <div className="hidden lg:block"></div>
        <img src={logo} alt="" className="w-4/12 h-4/12 block sm:hidden mb-5" />
        <img src={logo} alt="" className="hidden sm:block" />
        <div className="flex flex-row justify-center items-center">
          <a
            href="https://instagram.com/printquality_?igshid=YmMyMTA2M2Y="
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiOutlineInstagram className="bg-white text-primary-blue-print-400 w-8 h-8 mr-2 rounded-full p-1" />
          </a>
          <a
            href="https://www.facebook.com/wildga"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF className="bg-white text-primary-blue-print-400  w-8 h-8 rounded-full p-1" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Footer;
