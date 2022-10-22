import React from "react";

const Goal = () => {
  return (
    <section id="goal" className="relative">
      <div className="md:bg-gradient-to-tr bg-gradient-to-br from-primary-blue-print-200 to-primary-blue-print-500">
        <div className="container flex sm:justify-between justify-center items-center lg:flex-row flex-col py-5">
          <div
            data-aos="fade-right"
            className="bg-goal-desktop h-[20rem] w-6/12 lg:w-1/3 relative bg-no-repeat bg-contain bg-center"
          ></div>
          <div
            data-aos="fade-up"
            className="bg-white shadow-slate-900 shadow-2xl rounded-lg py-14 px-5 lg:py-32 lg:px-14 w-9/12 lg:w-6/12 justify-self-start"
          >
            <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-primary-blue-print-300 font-bold mb-5">
              Nosso Objetivo...
            </h1>
            <p className="text-primary-gray-print-100 text-lg lg:text-xl xl:text-2xl font-light">
              Nosso objetivo é ser uma empresa com a qualidade reconhecida no
              mercado, buscamos sempre alcançar o reconhecimento entre os
              clientes por meio da excelência.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Goal;
