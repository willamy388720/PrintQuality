import React, { useEffect, useState } from "react";
import Button from "../shared/Button";
import Input from "../shared/Input";
import Select from "../shared/Select";

const services = [
  { name: "" },
  { name: "Envelopamento Carro" },
  { name: "Cartões de Visita" },
  { name: "Adesivos Personalizados" },
  { name: "Banner" },
  { name: "Cartaz" },
  { name: "Placas" },
  { name: "Outro" },
];

const materials = [
  { name: "", price: 0 },
  { name: "Lona 440 Brilho", price: 50 },
  { name: "Adesivo Ritrama", price: 45 },
  { name: "Adesivo Transparente", price: 45 },
  { name: "Adesivo Fosco", price: 45 },
  { name: "Adesivo Perfurado", price: 60 },
  { name: "Adesivo", price: 50 },
];

const Form = ({ modalIsOpen }) => {
  const [inputs, setInputs] = useState({
    service: "",
    height: "",
    width: "",
    qty: "",
    material: "",
  });
  const [modifications, setModifications] = useState({
    service: "",
    height: "",
    width: "",
    qty: "",
    material: "",
    art: "",
  });
  const [errors, setErrors] = useState({
    height: false,
    width: false,
    qty: false,
  });
  const [checked, setChecked] = useState(false);
  const [price, setPrice] = useState(0);

  useEffect(() => {
    let value;
    let area;
    let designPrice = checked ? 0 : 10;
    if (!errors.height && !errors.width && !errors.qty) {
      if (
        inputs.service !== "" &&
        inputs.height !== "" &&
        inputs.width !== "" &&
        inputs.qty !== "" &&
        inputs.material !== ""
      ) {
        value = findMaterial();
        area =
          (parseFloat(inputs.height) / 100) * parseFloat(inputs.width / 100);
        setPrice(area * value * inputs.qty + designPrice);
        setModifications({
          service: inputs.service.replace(" ", "%20"),
          height: inputs.service.replace(" ", "%20"),
          width: inputs.service.replace(" ", "%20"),
          qty: inputs.service.replace(" ", "%20"),
          material: inputs.service.replace(" ", "%20"),
          art: checked ? "Sim" : "Nao",
        });
      }
    }
  }, [inputs, errors, checked]);

  const findMaterial = () => {
    materials.map((item) => {
      if (item.name === inputs.material) {
        return item.price;
      }
    });
  };

  const handleChange = (value, input) => {
    if (input === "height" || input === "width" || input === "qty") {
      validate(value, input);
    }
    setInputs((prevState) => ({ ...prevState, [input]: value }));
  };

  const validate = (value, input) => {
    const onlyNumbers = new RegExp("^[0-9]+$");
    setErrors((prevState) => ({
      ...prevState,
      [input]: !onlyNumbers.test(value),
    }));
  };

  return (
    <section id="form" className="relative h-[56rem] md:h-[48rem]">
      <h1
        data-aos="fade-down"
        className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-primary-blue-print-300 md:absolute md:right-0 md:left-0 md:top-20 font-bold text-center mt-10 md:mt-0"
      >
        Faça o seu orçamento
      </h1>
      <div className="flex md:flex-row flex-col-reverse justify-center md:justify-between items-center container md:absolute w-full md:-bottom-20">
        <form
          data-aos="fade-up"
          class={`bg-primary-blue-print-400 w-10/12 md:w-6/12 py-6 px-8 md:py-10 md:px-12 lg:py-14 lg:px-20 rounded-xl ${
            modalIsOpen ? "z-0" : "z-10"
          } shadow-slate-900 shadow-2xl`}
        >
          <Select
            className="relative mb-6"
            label="Serviço"
            data={services}
            value={inputs.service}
            onChange={(e) => handleChange(e.target.value, "service")}
          />
          {inputs.service === "Envelopamento Carro" ||
          inputs.service === "Cartões de Visita" ||
          inputs.service === "Adesivos Personalizados" ||
          inputs.service === "Outro" ? (
            <p class="text-sm text-white mb-4">
              Por Favor, entre em contato com a gente, esse é um serviço mais
              complexo e demanda uma conversa mais detalhada com um de nossos
              profissionais
            </p>
          ) : (
            <>
              <div class="flex flex-wrap -mx-3 mb-6">
                <Input
                  className="w-full lg:w-1/2 px-3"
                  label="Altura cm"
                  placeholder="Ex.: 140"
                  onChange={(e) => handleChange(e.target.value, "height")}
                  value={inputs.height}
                  error={errors.height}
                />
                <Input
                  className="w-full lg:w-1/2 px-3"
                  label="Largura cm"
                  placeholder="Ex.: 140"
                  onChange={(e) => handleChange(e.target.value, "width")}
                  value={inputs.width}
                  error={errors.width}
                />
              </div>
              <div class="flex flex-wrap -mx-3 mb-6">
                <Input
                  className="w-full lg:w-1/2 px-3"
                  label="Quantidade"
                  placeholder="Ex.: 5"
                  onChange={(e) => handleChange(e.target.value, "qty")}
                  value={inputs.qty}
                  error={errors.qty}
                />
                <Select
                  className="w-full lg:w-1/2 px-3 relative"
                  label="Material"
                  position="inset-y-12 right-3"
                  data={materials}
                  value={inputs.material}
                  onChange={(e) => handleChange(e.target.value, "material")}
                />
              </div>
              <label class="md:w-2/3 block text-white">
                <input
                  class="mr-2"
                  type="checkbox"
                  value={checked}
                  onChange={() => setChecked((old) => !old)}
                />
                <span class="text-sm">Já tenho a arte</span>
              </label>
              <p className="text-lg md:text-lg lg:text-2xl text-white font-bold my-4 md:my-8 lg:my-12">
                Valor Estimado: R$ {price.toFixed(2)}
              </p>{" "}
            </>
          )}
          <Button
            title="Entrar em contato"
            href={`https://wa.me/5585991001754?&text=SERVIÇO:%20${
              modifications.service
            };%20ALTURA:%20${modifications.height}cm;%20LARGURA:%20${
              modifications.width
            }cm;%20MATERIAL:%20${modifications.material};%20QUANTIDADE:%20${
              modifications.qty
            };%20TENHO%20UMA%20ARTE:%20${
              modifications.art
            };%20VALOR%20ESTIMADO:%20R$%20${price.toFixed(2)};`}
          />
        </form>
        <div
          data-aos="fade-left"
          className="bg-form-desktop h-[20rem] md:h-screen w-8/12 md:w-5/12 relative bg-no-repeat bg-contain bg-center"
        ></div>
      </div>
    </section>
  );
};

export default Form;
