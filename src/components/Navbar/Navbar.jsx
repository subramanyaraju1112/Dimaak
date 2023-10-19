// "use client";
import Image from "next/image";
import React from "react";
import dimaak from "/public/images/svg/dimaak.svg";
import whatsappLogo from "/public/images/svg/whatsapp.svg";
import Link from "next/link";
import arrow from "/public/images/svg/arrow-down.svg";
import "./Navbar.style.css";
import { useForm } from "react-hook-form";
import Form from "../Form/Form";

const Navbar = () => {
  return (
    <div
      style={{
        display: "flex",
        backgroundImage: `url(/images/svg/Scenic.svg)`,
        flexDirection: "column",
        gap: "2rem",
        paddingBottom: "4rem",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <header className="w-full px-14 py-2 text-[#FFF]">
        <nav className="flex justify-between items-center pt-2.5">
          <div className="nav-logo">
            <Link href="#">
              <Image src={dimaak} alt="dimaak" />
            </Link>
          </div>
          <div className="nav-tab flex gap-6 items-center">
            <div>
              <ul className="nav-item flex items-center gap-6">
                <li>
                  <Link href="/destination">Destinations</Link>
                </li>
                <li>
                  <Link href="/honeymoon">Honeymoon</Link>
                </li>
                <li>
                  <Link href="/tailored">Tailored Packages</Link>
                </li>
              </ul>
            </div>
            <Link href="https://business.whatsapp.com/" target="_blank">
              <button className="whatsapp-btn flex gap-2.5 items-center">
                <Image
                  src={whatsappLogo}
                  alt="whatsappLogo"
                  width={24}
                  height={24}
                />
                <span>Business WhatsApp</span>
              </button>
            </Link>
          </div>
        </nav>
      </header>
      <div>
        <div
          className="font-Outfit flex w-full justify-between items-center px-14 nav-body-item"
          style={{ gap: "1rem" }}
        >
          <div className="max-w-[739px] flex flex-col gap-5">
            <div>
              <h1 className="headline text-white text-4xl font-extrabold">
                Customized International Adventures: Let Our Experts Plan Your
                Trip
              </h1>
            </div>
            <div>
              <p className="subHeadline text-lg">
                Experience the epitome of luxury and adventure with our
                customized international journeys. Let our experts curate an
                extraordinary trip tailored to your desires.
              </p>
            </div>
            <div className="flex gap-3">
              <Link href="#">
                <button className="explore-btn flex text-white gap-2 items-center">
                  <span>Explore Packages</span>
                  <Image src={arrow} alt="arrow" />
                </button>
              </Link>
              <Link href="#">
                <button className="chat-btn flex text-white gap-2 items-center">
                  <Image src={whatsappLogo} alt="whatsapp" />
                  <span>Chat on WhatsApp</span>
                </button>
              </Link>
            </div>
          </div>
          <Form />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
