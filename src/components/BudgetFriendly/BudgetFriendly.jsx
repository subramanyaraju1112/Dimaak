import Image from "next/image";
import React from "react";
import "./BudgetFriendly.css";
import arrow from "/public/images/svg/Arrow 2.svg";
import Thailand from "/public/images/png/thailand-wide.png";
import Bali from "/public/images/png/bali-wide.png";
import Singapore from "/public/images/png/singapore-full.png";
import Maldives from "/public/images/png/maldives-wide.png";
import Dubai from "/public/images/png/dubai-wide.png";

const BudgetFriendly = () => {
  return (
    <section className="budget-section">
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-12 py-[72px]">
          <div className="flex flex-col gap-0.5 items-center text-center">
            <h2 className="budget-headline font-bold">
              Budget Friendly Tour Packages Per Person
            </h2>
            <Image src={arrow} alt="arrow" />
          </div>
          <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="flex flex-col gap-6 col-span-1">
              <div className="budget-wrapper">
                <Image src={Thailand} alt="thailand" priority />
                <div className="budget-info flex flex-col text-white justify-end p-7">
                  <h3>Thailand</h3>
                  <span>
                    Starting from $14,000 Per Person
                  </span>
                </div>
              </div>
              <div className="budget-wrapper">
                <Image src={Bali} alt="bali" priority />
                <div className="budget-info flex flex-col text-white justify-end p-7">
                  <h3>Bali</h3>
                  <span>Starting from $14,000 Per Person</span>
                </div>
              </div>
            </div>
            <div className="budget-wrapper col-span-1">
              <Image src={Singapore} alt="singapore" priority />
              <div className="budget-info flex flex-col text-white justify-end p-7">
                <h3>Singapore</h3>
                <span>Starting from $14,000 Per Person</span>
              </div>
            </div>
            <div className="flex flex-col gap-6 col-span-1">
              <div className="budget-wrapper">
                <Image src={Maldives} alt="maldives" priority />
                <div className="budget-info flex flex-col text-white justify-end p-7">
                  <h3>Maldives</h3>
                  <span>Starting from $14,000 Per Person</span>
                </div>
              </div>
              <div className="budget-wrapper">
                <Image src={Dubai} alt="dubai" priority />
                <div className="budget-info flex flex-col text-white justify-end p-7">
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

export default BudgetFriendly;
