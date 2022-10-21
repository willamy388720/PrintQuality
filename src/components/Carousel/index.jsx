import React from "react";
import "tw-elements";
import Modal from "../Modal";

import Churros from "../../assets/jobs/Churros.png";
import Extintor from "../../assets/jobs/Extintor.png";
import Mesa from "../../assets/jobs/Mesa.png";
import Ortolar from "../../assets/jobs/Ortolar.jpg";
import Reserva from "../../assets/jobs/Reserva.jpg";
import Sabor from "../../assets/jobs/Sabor.jpg";
import Siga from "../../assets/jobs/Siga-me.jpg";
import Super from "../../assets/jobs/Super.png";
import Tambor from "../../assets/jobs/Tambor.jpg";
import Via from "../../assets/jobs/Via.jpg";

const Carousel = ({ modalIsOpen, onRequestClose }) => {
  return (
    <Modal modalIsOpen={modalIsOpen} onRequestClose={onRequestClose}>
      <div
        id="carouselExampleCrossfade"
        class="carousel slide carousel-fade relative flex justify-center"
        data-bs-ride="carousel"
      >
        <div class="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
          <button
            type="button"
            data-bs-target="#carouselExampleCrossfade"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCrossfade"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCrossfade"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCrossfade"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCrossfade"
            data-bs-slide-to="4"
            aria-label="Slide 5"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCrossfade"
            data-bs-slide-to="5"
            aria-label="Slide 6"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCrossfade"
            data-bs-slide-to="6"
            aria-label="Slide 7"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCrossfade"
            data-bs-slide-to="7"
            aria-label="Slide 8"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCrossfade"
            data-bs-slide-to="8"
            aria-label="Slide 9"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCrossfade"
            data-bs-slide-to="9"
            aria-label="Slide 10"
          ></button>
        </div>
        <div class="carousel-inner relative w-12/12 lg:w-6/12 overflow-hidden">
          <div class="carousel-item active float-left w-full">
            <img src={Churros} class="block w-full" alt="" />
          </div>
          <div class="carousel-item float-left w-full">
            <img src={Extintor} class="block w-full" alt="" />
          </div>
          <div class="carousel-item float-left w-full">
            <img src={Mesa} class="block w-full" alt="" />
          </div>
          <div class="carousel-item float-left w-full">
            <img src={Ortolar} class="block w-full" alt="" />
          </div>
          <div class="carousel-item float-left w-full">
            <img src={Reserva} class="block w-full" alt="" />
          </div>
          <div class="carousel-item float-left w-full">
            <img src={Sabor} class="block w-full" alt="" />
          </div>
          <div class="carousel-item float-left w-full">
            <img src={Siga} class="block w-full" alt="" />
          </div>
          <div class="carousel-item float-left w-full">
            <img src={Super} class="block w-full" alt="" />
          </div>
          <div class="carousel-item float-left w-full">
            <img src={Tambor} class="block w-full" alt="" />
          </div>
          <div class="carousel-item float-left w-full">
            <img src={Via} class="block w-full" alt="" />
          </div>
        </div>
        <button
          class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
          type="button"
          data-bs-target="#carouselExampleCrossfade"
          data-bs-slide="prev"
        >
          <span
            class="carousel-control-prev-icon inline-block bg-no-repeat"
            aria-hidden="true"
          ></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
          type="button"
          data-bs-target="#carouselExampleCrossfade"
          data-bs-slide="next"
        >
          <span
            class="carousel-control-next-icon inline-block bg-no-repeat"
            aria-hidden="true"
          ></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </Modal>
  );
};

export default Carousel;
