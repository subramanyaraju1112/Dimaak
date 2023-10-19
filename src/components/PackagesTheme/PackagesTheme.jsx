import Image from "next/image";
import React from "react";
import "./PackagesTheme.css";
import arrow from "/public/images/svg/Arrow 2.svg";
import Bachelor from "/public/images/png/bachelor.png";
import HoneyMoon from "/public/images/png/honeymoon.png";
import Family from "/public/images/png/family.png";
import GroupTours from "/public/images/png/grouptours.png";

const PackagesTheme = () => {
  const PackagesList = [
    {
      image: Bachelor,
      theme: "Budget / Bachelor",
      price: "Starting from $37,000 Per Person",
    },
    {
      image: HoneyMoon,
      theme: "Honey Moon",
      price: "Starting from $37,000 Per Person",
    },
    {
      image: Family,
      theme: "Family",
      price: "Starting from $37,000 Per Person",
    },
    {
      image: GroupTours,
      theme: "Group Tours",
      price: "Starting from $37,000 Per Person",
    },
  ];
  return (
    <section className="package-section">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col gap-12 py-[72px] ">
          <div className="flex flex-col gap-0.5 items-center text-center">
            <h2 className="packages-headline font-bold">
              Packages Based on Theme
            </h2>
            <Image src={arrow} alt="arrow" />
          </div>
          <div className="package-list grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PackagesList.map((list, index) => {
              return (
                <div
                  className="package-list-item flex col-span-1 flex-col"
                  key={index}
                >
                  <div className="package-image p-6">
                    <Image src={list.image} alt="packages-list" />
                  </div>
                  <div className="theme-wrapper flex flex-col gap-1.5 p-6">
                    <h4 className="text-lg font-bold">{list.theme}</h4>
                    <span>{list.price}</span>
                    <div className="circle circle-left" />
                    <div className="circle circle-right" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PackagesTheme;
