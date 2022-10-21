import React from "react";

const Work = ({
  title,
  backgroundColor = "bg-primary-blue-print-400",
  url,
}) => {
  return (
    <div className="relative w-40 h-36 md:w-52 md:h-48 lg:w-64 lg:h-60 shadow-xl">
      <img src={url} alt="" className="absolute" />
      <div className="w-full h-full flex justify-center items-center">
        <div
          className={`w-full h-full ${backgroundColor} rounded-br-lg rounded-bl-lg`}
          style={{
            clipPath: "polygon(0 83%, 100% 59%, 100% 100%, 0% 100%)",
          }}
        ></div>
        <p className="text-white font-semibold absolute bottom-4 text-xs md:text-base lg:text-xl">
          {title}
        </p>
      </div>
    </div>
  );
};

export default Work;
