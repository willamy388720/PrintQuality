import React from "react";
import { BsWhatsapp } from "react-icons/bs";

const Button = ({
  title,
  backgroundColor = "bg-primary-blue-print-200",
  hover = "hover:bg-primary-blue-print-100",
  href,
  onPress = () => {},
  whatsapp = false,
  target = "",
}) => {
  return (
    <a
      class={`${backgroundColor} ${hover} cursor-pointer text-white py-2 px-4 rounded-lg w-full flex justify-center items-center shadow-lg`}
      type="button"
      href={href}
      onClick={onPress}
      target={target}
      rel="noopener noreferrer"
    >
      {whatsapp && <BsWhatsapp className="mr-2" />}
      {title}
    </a>
  );
};

export default Button;
