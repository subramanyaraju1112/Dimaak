import React from "react";
import Image from "next/image";
import google from "/public/images/svg/google.svg";
import clock from "/public/images/svg/clock.svg";
import locate from "/public/images/svg/locate.svg";
import routing from "/public/images/svg/routing.svg";
import discount from "/public/images/svg/discount-shape.svg";
import './info.css'

const Info = () => {
  const Features = [
    {
      logo: google,
      offer: "4.9 Google Ratings",
    },
    {
      logo: clock,
      offer: "24/7 Trip Assistance",
    },
    {
      logo: locate,
      offer: "Destination Experts",
    },
    {
      logo: routing,
      offer: "100% Customized Trip",
    },
    {
      logo: discount,
      offer: "Transparent Pricing",
    },
  ];
  return (
    <section className="info-section">
      <div className="container px-4 pt-6 mx-auto">
        <ul className="info-list flex flex-wrap items-center justify-around py-9 px-6 gap-4">
          {Features.map((feature, index) => {
            return (
              <li className="info-list-item flex items-center gap-2" key={index}>
                <Image src={feature.logo} alt="logo" />
                <span className="text-white font-medium">
                  {feature.offer}
                </span>
              </li>
            );
          })}
          <div className="dot dot-left" />
          <div className="dot dot-right" />
        </ul>
      </div>
    </section>
  );
};

export default Info;
