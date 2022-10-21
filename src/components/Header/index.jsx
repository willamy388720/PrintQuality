import React from "react";
import logo from "../../assets/images/Logo Grande.svg";
import logoMobile from "../../assets/images/logo_mobile.svg";
import Button from "../shared/Button";

const Header = () => {
  return (
    <section id="header" className="relative">
      <div className="bg-header-mobile bg-cover w-full h-full absolute block sm:hidden"></div>
      <div className="bg-header-desktop bg-cover w-full h-full absolute hidden sm:block"></div>
      <div className="container h-screen relative flex sm:justify-between justify-center items-center sm:flex-row flex-col-reverse">
        <div>
          <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-primary-blue-print-300 text-center sm:text-left font-bold">
            A Melhor Solução <br className="sm:hidden block" />
            <br className="hidden lg:block" />
            Gráfica <br className="hidden sm:block lg:hidden" /> Para Você
          </h1>
          <p className="text-primary-gray-print-100 text-base lg:text-md xl:text-lg text-center sm:text-left font-light lg:my-5 my-3">
            Somos uma empresa especializada <br className="block lg:hidden" />{" "}
            no mercado de <br className="hidden lg:block" />
            impressão.
          </p>
          <Button
            title="Faça o seu orçamento"
            backgroundColor="bg-primary-blue-print-200"
            hover="hover:bg-primary-blue-print-100"
            href="/#form"
          />
        </div>
        <img
          src={logo}
          alt="Print Quality"
          className="w-56 h-56 lg:w-80 lg:h-80 xl:w-96 xl:h-96 hidden sm:block"
        />
        <img
          src={logoMobile}
          alt="Print Quality"
          className="w-56 h-56 lg:w-80 lg:h-80 xl:w-96 xl:h-96 block sm:hidden mb-5"
        />
      </div>
    </section>
  );
};

export default Header;
