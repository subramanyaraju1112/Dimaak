import React from "react";
import "./HandPicked.css";
import arrow from "/public/images/svg/Arrow 2.svg";
import Thailand from "/public/images/png/thailand-wide.png";
import Bali from "/public/images/png/bali-wide.png";
import Singapore from "/public/images/png/singapore-full.png";
import Maldives from "/public/images/png/maldives-wide.png";
import Dubai from "/public/images/png/dubai-wide.png";
import Image from "next/image";

const HandPicked = () => {
  return (
    <section className="handpicked-section">
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-12 py-[72px]">
          <div className="flex flex-col gap-0.5 items-center text-center">
            <h2 className="handpicked-headline font-bold">
              Hand Picked Tour Packages Per Person
            </h2>
            <Image src={arrow} alt="arrow" />
          </div>
          <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="flex flex-col gap-6 col-span-1">
              <div className="handpicked-wrapper">
                <Image src={Thailand} alt="thailand" priority />
                <div className="handpicked-info flex flex-col text-white justify-end p-7">
                  <h3>Thailand</h3>
                  <span>Starting from $14,000 Per Person</span>
                </div>
              </div>
              <div className="handpicked-wrapper col-span-1">
                <Image src={Bali} alt="bali" priority />
                <div className="handpicked-info flex flex-col text-white justify-end p-7">
                  <h3>Bali</h3>
                  <span>Starting from $14,000 Per Person</span>
                </div>
              </div>
            </div>
            <div>
              <div className="handpicked-wrapper col-span-1">
                <Image src={Singapore} alt="singapore" priority />
                <div className="handpicked-info flex flex-col text-white justify-end p-7">
                  <h3>Singapore</h3>
                  <span>Starting from $14,000 Per Person</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-6 col-span-1">
              <div className="handpicked-wrapper">
                <Image src={Maldives} alt="maldives" priority />
                <div className="handpicked-info flex flex-col text-white justify-end p-7">
                  <h3>Maldives</h3>
                  <span>Starting from $14,000 Per Person</span>
                </div>
              </div>
              <div className="handpicked-wrapper col-span-1">
                <Image src={Dubai} alt="dubai" priority />
                <div className="handpicked-info flex flex-col text-white justify-end p-7">
                  <h3>Dubai</h3>
                  <span>Starting from $14,000 Per Person</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HandPicked;
