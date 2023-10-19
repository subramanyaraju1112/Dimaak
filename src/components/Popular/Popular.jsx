"use client";
import Image from "next/image";
import React from "react";
import "./Popular.css";
import Thailand from "/public/images/png/thailand.png";
import Bali from "/public/images/png/bali.png";
import Maldives from "/public/images/png/maldives.png";
import Singapore from "/public/images/png/singapore.png";
import Dubai from "/public/images/png/dubai.png";
import arrow from "/public/images/svg/Arrow 2.svg";
import line from "/public/images/svg/Vector 16.svg";
import arrowLeft from "/public/images/svg/arrow-left.svg";
import arrowRight from "/public/images/svg/arrow-right.svg";

const Popular = () => {
  const Destinations = [
    {
      image: Thailand,
      place: "Thailand",
      price: "Starting from $14,000 Per Person",
    },
    {
      image: Bali,
      place: "Bali",
      price: "Starting from $14,000 Per Person",
    },
    {
      image: Maldives,
      place: "Maldives",
      price: "Starting from $14,000 Per Person",
    },
    {
      image: Singapore,
      place: "Singapore",
      price: "Starting from $14,000 Per Person",
    },
    {
      image: Dubai,
      place: "Dubai",
      price: "Starting from $14,000 Per Person",
    },
  ];

  return (
    <section className="popular-section">
      <div className="container px-4 mx-auto flex flex-col py-[72px] gap-12">
        <div className="flex flex-col gap-0.5 items-center text-center">
          <h2 className="popular-headline font-bold">Popular Destinations</h2>
          <Image src={arrow} alt="arrow" />
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {Destinations.map((destination, index) => (
            <div key={index} className="destination-wrapper col-span-1">
              <Image src={destination.image} alt="city" priority />
              <div className="destination-info p-6 flex flex-col text-center text-white justify-end">
                <h3>{destination.place}</h3>
                <span>{destination.price}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center md:justify-center lg:justify-center xl:justify-end sm:justify-center">
          <div>
            <span className="pagination text-lg font-semibold">2/4</span>
          </div>
          <div className="pl-6">
            <Image src={line} alt="line" />
          </div>
          <div className="flex items-center gap-4 pl-3">
            <div className="slide-arrow">
              <Image src={arrowLeft} alt="arrowLeft" />
            </div>
            <div className="slide-arrow">
              <Image src={arrowRight} alt="arrowRight" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Popular;
