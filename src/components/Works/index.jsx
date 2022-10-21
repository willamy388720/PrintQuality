import React from "react";
import carro from "../../assets/images/Group 1000000869-2.png";
import cartao from "../../assets/images/Group 1000000869-3.png";
import adesivo from "../../assets/images/Group 1000000869-4.png";
import banner from "../../assets/images/Group 1000000869.png";
import cartaz from "../../assets/images/Group 1000000869-1.png";
import placa from "../../assets/images/Group 1000000869-5.png";
import Button from "../shared/Button";
import Work from "../shared/Work";

const Works = ({ handleOpenModal }) => {
  return (
    <section
      id="works"
      data-aos="fade-down"
      className="relative flex items-center flex-col"
    >
      <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-primary-blue-print-300 font-bold my-10 lg:my-14">
        Trabalhamos Com
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 sm:gap-10 lg:gap-16">
        <Work url={carro} title="Envelopamento de carros" />
        <Work
          url={cartao}
          title="Cartões de visita"
          backgroundColor="bg-primary-blue-print-200"
        />
        <Work url={adesivo} title="Adesivos Personalizados" />
        <Work
          url={banner}
          title="Banners"
          backgroundColor="bg-primary-blue-print-200"
        />
        <Work url={cartaz} title="Cartazes" />
        <Work
          url={placa}
          title="Placas"
          backgroundColor="bg-primary-blue-print-200"
        />
      </div>
      <div className="mt-14 sm:w-6/12 lg:w-4/12">
        <Button title="Confira nossos trabalhos" onPress={handleOpenModal} />
      </div>
    </section>
  );
};

export default Works;
