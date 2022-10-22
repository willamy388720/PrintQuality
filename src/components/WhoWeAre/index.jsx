import React from "react";

const WhoWeAre = () => {
  return (
    <section id="whoweare" className="relative flex mb-6">
      <div className="container h-screen relative flex sm:justify-between justify-center items-center md:flex-row flex-col-reverse">
        <div data-aos="fade-right" className="md:w-2/5">
          <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-primary-blue-print-300 font-bold mb-5">
            Quem Somos?
          </h1>
          <p className="text-primary-gray-print-100 text-lg lg:text-xl xl:text-2xl font-light mb-3">
            A Print Quality é uma empresa especializada no mercado de impressão.
            Trabalhamos com adesivos personalizados, banners, papéis de parede,
            cartazes, adesivos para carros e muitos outros designs.
          </p>
          <p className="text-primary-gray-print-100 text-lg lg:text-xl xl:text-2xl font-light">
            Também trabalhamos com os melhores fornecedores de materiais e
            equipamentos do mercado, garantindo a qualidade dos produtos,
            buscando atender as expectativas dos consumidores.
          </p>
        </div>
        <div
          data-aos="fade-up"
          className="bg-contain bg-center bg-whoweare-desktop h-[20rem] md:h-full w-8/12 md:w-2/5 bg-no-repeat"
        ></div>
      </div>
    </section>
  );
};

export default WhoWeAre;
